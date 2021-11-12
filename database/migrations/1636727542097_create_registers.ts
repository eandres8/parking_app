import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateRegisters extends BaseSchema {
  protected tableName = 'registers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.timestamp('final_date', { useTz: true })
      table.integer('total_payment')
      table.string('license_plate').notNullable()
      table.string('cellphone')
      table.string('type_vehicle')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
