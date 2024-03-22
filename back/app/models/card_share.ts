import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class CardShare extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public card_id: string

  @column()
  public shared_by: string // Utilisez le nom correct de la colonne basé sur votre migration

  @belongsTo(() => User, {
    foreignKey: 'shared_by', // Assurez-vous que cela correspond à la colonne dans la base de données
  })
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public sharedAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
