import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'card_shares'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.uuid('card_id').unsigned().references('id').inTable('cards').onDelete('CASCADE')
      table.uuid('shared_by').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.timestamp('shared_at').defaultTo(this.db.rawQuery('now()').knexQuery)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
