'use strict'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import UserResources from "App/Resources/Api/v1/Users/UserResources";

export default class GetMeController {

  public async index({auth}: HttpContextContract): Promise<object> {
    return UserResources.make(
      await auth.use('api').authenticate()
    )
  }
}
