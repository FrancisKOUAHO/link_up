import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        username: 'f',
        email: 'f@f.f',
        password: 'f',
      },
      {
        id: '223e4567-e89b-12d3-a456-426614174000',
        username: 't',
        email: 't@t.t',
        password: 't',
      },
      {
        id: '323e4567-e89b-12d3-a456-426614174000',
        username: 'z',
        email: 'z@z.z',
        password: 'z',
      },
      {
        id: '423e4567-e89b-12d3-a456-426614174000',
        username: 'j',
        email: 'j@j.j',
        password: 'j',
      },
    ])
  }
}
