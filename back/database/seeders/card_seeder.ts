import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Card from '#models/card'

export default class CardSeeder extends BaseSeeder {
  public async run() {
    await Card.createMany([
      {
        id: '123e4567-e89b-12d3-a456-426614174002',
        enterprise_id: '123e4567-e89b-12d3-a456-426614174001',
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        name: 'Francis K',
        phone: '1234567890',
        email: 'francis@example.com',
        website: 'https://www.francis.com',
        image: 'path/to/imageF.jpg',
      },
      {
        id: '223e4567-e89b-12d3-a456-426614174002',
        enterprise_id: '223e4567-e89b-12d3-a456-426614174001',
        user_id: '223e4567-e89b-12d3-a456-426614174000',
        name: 'Thibaud R',
        phone: '1234567890',
        email: 'thibaud@example.com',
        website: 'https://www.thiabud.com',
        image: 'path/to/imageT.jpg',
      },
      {
        id: '323e4567-e89b-12d3-a456-426614174002',
        enterprise_id: '323e4567-e89b-12d3-a456-426614174001',
        user_id: '323e4567-e89b-12d3-a456-426614174000',
        name: 'Zola I',
        phone: '1234567890',
        email: 'zola@example.com',
        website: 'https://www.zola.com',
        image: 'path/to/imageZ.jpg',
      },
      {
        id: '423e4567-e89b-12d3-a456-426614174002',
        enterprise_id: '423e4567-e89b-12d3-a456-426614174001',
        user_id: '423e4567-e89b-12d3-a456-426614174000',
        name: 'Jackie T',
        phone: '1234567890',
        email: 'jackie@example.com',
        website: 'https://www.jackie.com',
        image: 'path/to/imageJ.jpg',
      },
    ])
  }
}
