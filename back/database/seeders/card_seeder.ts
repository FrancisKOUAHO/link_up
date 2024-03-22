import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Card from '#models/card'

export default class CardSeeder extends BaseSeeder {
  public async run() {
    await Card.createMany([
      {
        id: '123e4567-e89b-12d3-a456-426614174002', // Remplacez par un UUID valide
        enterprise_id: '123e4567-e89b-12d3-a456-426614174001', // Assurez-vous que cet ID existe dans votre table enterprises
        user: '123e4567-e89b-12d3-a456-426614174000', // Assurez-vous que cet ID existe dans votre table users
        name: 'Francis K',
        phone: '1234567890',
        email: 'francis@example.com',
        website: 'https://www.francis.com',
        image: 'path/to/imageF.jpg',
      },
      {
        id: '223e4567-e89b-12d3-a456-426614174002', // Remplacez par un UUID valide
        enterprise_id: '223e4567-e89b-12d3-a456-426614174001', // Assurez-vous que cet ID existe dans votre table enterprises
        user: '223e4567-e89b-12d3-a456-426614174000', // Assurez-vous que cet ID existe dans votre table users
        name: 'Thibaud R',
        phone: '1234567890',
        email: 'thibaud@example.com',
        website: 'https://www.thiabud.com',
        image: 'path/to/imageT.jpg',
      },
      {
        id: '323e4567-e89b-12d3-a456-426614174002', // Remplacez par un UUID valide
        enterprise_id: '323e4567-e89b-12d3-a456-426614174001', // Assurez-vous que cet ID existe dans votre table enterprises
        user: '323e4567-e89b-12d3-a456-426614174000', // Assurez-vous que cet ID existe dans votre table users
        name: 'Zola I',
        phone: '1234567890',
        email: 'zola@example.com',
        website: 'https://www.zola.com',
        image: 'path/to/imageZ.jpg',
      },
      {
        id: '423e4567-e89b-12d3-a456-426614174002', // Remplacez par un UUID valide
        enterprise_id: '423e4567-e89b-12d3-a456-426614174001', // Assurez-vous que cet ID existe dans votre table enterprises
        user: '423e4567-e89b-12d3-a456-426614174000', // Assurez-vous que cet ID existe dans votre table users
        name: 'Jackie T',
        phone: '1234567890',
        email: 'jackie@example.com',
        website: 'https://www.jackie.com',
        image: 'path/to/imageJ.jpg',
      },

    ])
  }
}
