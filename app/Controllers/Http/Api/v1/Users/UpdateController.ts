'use strict'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import UsersRepositories from 'App/Repositories/UsersRepositories';
import User from 'App/Models/User';
import UpdateValidator from "App/Validators/Api/v1/User/UpdateValidator";
import IUpdate from "App/Interfaces/User/IUpdate";

export default class UpdateController {
  public async index({auth, request, response}: HttpContextContract): Promise<void> {
    const user: User = await auth.use('api').authenticate();
    const data: IUpdate = await request.validate(UpdateValidator);
    await UsersRepositories.updateUser(user, data);
    return response.ok({}, true);
  }

}
