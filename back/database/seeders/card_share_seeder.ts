import { BaseSeeder } from '@adonisjs/lucid/seeders'
import CardShare from '#models/card_share'
import { DateTime } from 'luxon';

export default class CardShareSeeder extends BaseSeeder {
  public async run() {
    await CardShare.createMany([
      {
        card_id: '123e4567-e89b-12d3-a456-426614174002', // Assume an existing card ID
        shared_by: '123e4567-e89b-12d3-a456-426614174000', // Assume an existing user ID
        sharedAt: DateTime.now(), // Utilisez DateTime.now() pour obtenir l'heure actuelle
      },
      {
        card_id: '223e4567-e89b-12d3-a456-426614174002', // Assume an existing card ID
        shared_by: '223e4567-e89b-12d3-a456-426614174000', // Assume an existing user ID
        sharedAt: DateTime.now(), // Utilisez DateTime.now() pour obtenir l'heure actuelle
      },
      {
        card_id: '323e4567-e89b-12d3-a456-426614174002', // Assume an existing user ID
        shared_by: '323e4567-e89b-12d3-a456-426614174000', // Assume an existing card ID
        sharedAt: DateTime.now(), // Utilisez DateTime.now() pour obtenir l'heure actuelle
      },
      {
        card_id: '423e4567-e89b-12d3-a456-426614174002', // Assume an existing card ID
        shared_by: '423e4567-e89b-12d3-a456-426614174000', // Assume an existing user ID
        sharedAt: DateTime.now(), // Utilisez DateTime.now() pour obtenir l'heure actuelle
      },
    ])
  }
}
