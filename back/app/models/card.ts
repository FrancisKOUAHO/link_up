import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Enterprise from '#models/enterprise'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare enterprise_id: string

  @column()
  declare name: string

  @column()
  declare phone: string

  @column()
  declare email: string

  @column()
  declare website: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasOne(() => Enterprise)
  declare enterprise: HasOne<typeof Enterprise>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
