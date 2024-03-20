import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class SessionController {
  async signIn({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user: User | null = await User.findBy('email', email)

    if (!user) {
      response.abort('Invalid credentials')
      return
    }

    const passwordVerification = await hash.verify(user.password, password)

    if (!passwordVerification) {
      response.abort('Invalid credentials')
      return
    }

    const getUser: User = await User.verifyCredentials(email, password)

    return response.ok(getUser)
  }

  async signUp({ auth, request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user: User | null = await User.findBy('email', email)

    if (user) {
      response.abort('User already exists')
      return
    }

    const newUser: User = await User.create({
      email,
      password,
    })

    await auth.use('web').login(newUser)

    return response.created(newUser)
  }

  async whoami({ auth, response }: HttpContext) {
    const user: User = auth.use('web').user!

    return response.ok(user)
  }

  async signOut({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.json({ message: 'User logged out' })
  }
}
