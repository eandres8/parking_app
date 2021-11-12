import View from '@ioc:Adonis/Core/View'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { typeVehicleList, States, valuesToPayments } from 'App/constants/types'
import Register from 'App/Models/Register'
import { RegisterListBuilder } from 'App/Classes/RegisterListBuilder'
import { DateTime } from 'luxon'

export default class RegistersController {
  public async home() {
    const initData = {
      typeVehicleList,
    }
    return View.render('welcome', initData)
  }

  public async register({ request, response }: HttpContextContract) {
    const body = request.all()

    if (body.licensePlate) {
      const register = await Register.create({
        cellphone: body.cellphone,
        licensePlate: body.licensePlate,
        typeVehicle: body.typeVehicle,
        state: States.ACTIVE,
      })

      register.save()
    }

    // return View('registers', { listRegisters })
    return response.redirect('/registers')
  }

  public async show() {
    const listRegistersModels = await Register.all()
    const listRegisters = listRegistersModels.map((register) =>
      RegisterListBuilder.fromJson(register.toJSON()).build()
    )

    return View.render('registers', { listRegisters })
  }

  public async update({ request, response }: HttpContextContract) {
    const { id_register: idRegister } = request.all()

    const register = await Register.findOrFail(idRegister)

    register.updatedAt = DateTime.local()
    register.finalDate = DateTime.local()

    const diff = register.finalDate.diff(register.createdAt, 'minutes').minutes
    const valueFinal = valuesToPayments.get(register.typeVehicle) * diff

    register.totalPayment = Math.round(valueFinal)
    register.state = States.CLOSED
    register.save()

    return response.redirect('/registers')
  }
}
