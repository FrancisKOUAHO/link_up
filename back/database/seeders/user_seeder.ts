import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        id: '123e4567-e89b-12d3-a456-426614174000', // Remplacez par un UUID valide
        username: 'f',
        email: 'f@f.f',
        password: 'f', // Make sure to hash passwords in your actual application
      },
      {
        id: '223e4567-e89b-12d3-a456-426614174000', // Remplacez par un UUID valide
        username: 't',
        email: 't@t.t',
        password: 't', // Make sure to hash passwords in your actual application
      },
      {
        id: '323e4567-e89b-12d3-a456-426614174000', // Remplacez par un UUID valide
        username: 'z',
        email: 'z@z.z',
        password: 'z', // Make sure to hash passwords in your actual application
      },
      {
        id: '423e4567-e89b-12d3-a456-426614174000', // Remplacez par un UUID valide
        username: 'j',
        email: 'j@j.j',
        password: 'j', // Make sure to hash passwords in your actual application
      },
    ])
  }
}
