import { DateTime } from 'luxon'

import { stateOption, States } from 'App/constants/types'

export class RegisterListBuilder {
  constructor(
    public readonly id: number,
    public readonly created_at: string,
    public readonly updated_at: string,
    public readonly final_date: string,
    public readonly total_payment: number,
    public readonly license_plate: string,
    public readonly cellphone: string,
    public readonly type_vehicle: string,
    public readonly state: string
  ) {}

  public static fromJson(data: any): RegisterListBuilder {
    return new RegisterListBuilder(
      data.id || 0,
      data.created_at || '',
      data.updated_at || '',
      data.final_date || '',
      data.total_payment || 0,
      data.license_plate || '',
      data.cellphone || '',
      data.type_vehicle || '',
      data.state || States.INACTIVE
    )
  }

  public build() {
    return {
      id: this.id,
      total_payment: this.total_payment,
      license_plate: this.license_plate,
      cellphone: this.cellphone,
      type_vehicle: this.type_vehicle,
      created_at: DateTime.fromISO(this.created_at).toFormat('yyyy-LLL-dd HH:mm:ss'),
      final_date: this.final_date
        ? DateTime.fromISO(this.final_date).toFormat('yyyy-LLL-dd HH:mm:ss')
        : '',
      updated_at: this.updated_at
        ? DateTime.fromISO(this.updated_at).toFormat('yyyy-LLL-dd HH:mm:ss')
        : '',
      state: stateOption.get(this.state),
    }
  }
}
