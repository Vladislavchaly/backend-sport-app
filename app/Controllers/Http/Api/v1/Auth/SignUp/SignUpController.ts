'use strict'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import {OpaqueTokenContract} from "@ioc:Adonis/Addons/Auth";
import SignUpValidator from "App/Validators/Api/v1/Auth/SignUpValidator";
import UsersRepositories from "App/Repositories/UsersRepositories";
import IUser from "App/Interfaces/User/IUser";

export default class SignUpController {

  public async index({auth, request}: HttpContextContract): Promise<ReturnType<OpaqueTokenContract<User>['toJSON']>> {

    await request.validate(SignUpValidator);

    const data: IUser = request.only([
      'name',
      'email',
      'password'
    ]);

    const user: User = await UsersRepositories.createUser(data);

    return await auth.use('api').login(user, {
      name: request.header('user-agent')
    });
  }
}
