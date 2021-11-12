import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddFieldStates extends BaseSchema {
  public async up() {
    this.schema.alterTable('registers', (table) => {
      table.string('state')
    })
  }

  public async down() {
    this.schema.alterTable('registers', (table) => {
      table.dropColumn('state')
    })
  }
}
