'use strict'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import UsersRepositories from 'App/Repositories/UsersRepositories';
import User from 'App/Models/User';

export default class DeleteController {

  public async index({auth, response}: HttpContextContract): Promise<void> {
    const user: User = await auth.use('api').authenticate();
    await UsersRepositories.deleteUser(user);
    return response.send({}, true);
  }

}
