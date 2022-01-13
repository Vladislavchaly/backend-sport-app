'use strict'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import {OpaqueTokenContract} from '@ioc:Adonis/Addons/Auth';
import SignUpValidator from 'App/Validators/Api/v1/Auth/SignUpValidator';
import UsersRepositories from 'App/Repositories/UsersRepositories';
import User from 'App/Models/User';
import ISignUp from "App/Interfaces/Auth/ISignUp";

export default class SignUpController {

  public async index({auth, request}: HttpContextContract): Promise<ReturnType<OpaqueTokenContract<User>['toJSON']>> {

    const data: ISignUp = await request.validate(SignUpValidator);

    const user: User = await UsersRepositories.createUser(data);

    return await auth.use('api').login(user, {
      name: request.header('user-agent')
    });
  }
}
