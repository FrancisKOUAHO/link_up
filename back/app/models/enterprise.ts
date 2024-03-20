import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Card from '#models/card'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Enterprise extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare address: string | null

  @column()
  declare phone: string | null

  @hasMany(() => Card)
  declare cards: HasMany<typeof Card>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
