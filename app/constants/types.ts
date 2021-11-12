import { OptionSelect } from 'App/entities/types'

export enum TypeVehicles {
  CAR = 'CAR',
  MOTO = 'MOTO',
}

export const typeVehicleList: OptionSelect[] = [
  { key: TypeVehicles.CAR, text: 'Carro Particular' },
  { key: TypeVehicles.MOTO, text: 'Moto' },
]

export const valuesToPayments = new Map().set(TypeVehicles.CAR, 80).set(TypeVehicles.MOTO, 150)

export enum TypePayment {
  PER_HOUR = 'Payment per Hour',
  PER_MINUTE = 'Payment per Minutes',
  FULL_TIME = 'Full Time', // Tarifa plena
}

export enum States {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
  CANCELED = 'CANCELED',
  CLOSED = 'CLOSED',
}

export const stateOption = new Map()
  .set(States.ACTIVE, { class: 'bg-success', text: 'Activo' })
  .set(States.INACTIVE, { class: 'bg-info text-dark', text: 'Inactivo' })
  .set(States.SUSPENDED, { class: 'bg-light text-dark', text: 'Suspendido' })
  .set(States.CANCELED, { class: 'bg-danger', text: 'Cancelado' })
  .set(States.CLOSED, { class: 'bg-warning text-dark', text: 'Cerrado' })
