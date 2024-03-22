import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Enterprise from '#models/enterprise'

export default class EnterpriseSeeder extends BaseSeeder {
  public async run() {
    await Enterprise.createMany([
      {
        id: '123e4567-e89b-12d3-a456-426614174001', // Remplacez par un UUID valide
        name: 'Francis corpo',
        address: '123 Tech Street',
        phone: '123-456-7890',
      },
      {
        id: '223e4567-e89b-12d3-a456-426614174001', // Remplacez par un UUID valide
        name: 'Thibaud corpo',
        address: '123 Tech Street',
        phone: '123-456-7890',
      },
      {
        id: '323e4567-e89b-12d3-a456-426614174001', // Remplacez par un UUID valide
        name: 'Zola corpo',
        address: '123 Tech Street',
        phone: '123-456-7890',
      },
      {
        id: '423e4567-e89b-12d3-a456-426614174001', // Remplacez par un UUID valide
        name: 'Jackie corpo',
        address: '123 Tech Street',
        phone: '123-456-7890',
      },
    ])
  }
}
