import { BaseSeeder } from '@adonisjs/lucid/seeders'
import CardShare from '#models/card_share'
import { DateTime } from 'luxon'

export default class CardShareSeeder extends BaseSeeder {
  public async run() {
    await CardShare.createMany([
      {
        card_id: '123e4567-e89b-12d3-a456-426614174002',
        shared_by: '123e4567-e89b-12d3-a456-426614174000',
        sharedAt: DateTime.now(),
      },
      {
        card_id: '223e4567-e89b-12d3-a456-426614174002',
        shared_by: '223e4567-e89b-12d3-a456-426614174000',
        sharedAt: DateTime.now(),
      },
      {
        card_id: '323e4567-e89b-12d3-a456-426614174002',
        shared_by: '323e4567-e89b-12d3-a456-426614174000',
        sharedAt: DateTime.now(),
      },
      {
        card_id: '423e4567-e89b-12d3-a456-426614174002',
        shared_by: '423e4567-e89b-12d3-a456-426614174000',
        sharedAt: DateTime.now(),
      },
    ])
  }
}
