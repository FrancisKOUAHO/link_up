/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const SessionController = () => import('#controllers/session_controller')

router
  .group(() => {
    router.get('/', async ({ response }) => response.ok({ uptime: process.uptime() }))
    router.get('health', ({ response }) => response.noContent())

    router
      .group(() => {
        router.post('signin', [SessionController, 'signIn'])
        router.post('signup', [SessionController, 'signUp'])
        router.delete('signout', [SessionController, 'signOut'])
        router.get('whoami', [SessionController, 'whoami']).use([middleware.auth()])
      })
      .prefix('auth')

    router
      .group(() => {
        router.resource('card', 'CardsController').apiOnly()
      })
      .prefix('cards')
      .middleware([middleware.auth()])

    router
      .group(() => {
        router.resource('card-share', 'CardSharesController').apiOnly()
      })
      .prefix('card-shares')
      .middleware([middleware.auth()])

    router
      .group(() => {
        router.resource('enterprise', 'EnterprisesController').apiOnly()
      })
      .prefix('enterprises')
      .middleware([middleware.auth()])
  })
  .prefix('api/v1')
