import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class CardShare extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare card_id: string

  @column()
  declare user_id: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare sharedAt: DateTime | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
