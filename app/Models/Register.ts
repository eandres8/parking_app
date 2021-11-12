import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import { States, TypeVehicles } from 'App/constants/types'

export default class Register extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime()
  public finalDate: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public totalPayment: number

  @column()
  public licensePlate: string

  @column()
  public cellphone: string

  @column()
  public typeVehicle: TypeVehicles

  @column()
  public state: States
}
