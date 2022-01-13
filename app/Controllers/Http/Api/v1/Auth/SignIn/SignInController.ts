'use strict'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import SignInvalidator from 'App/Validators/Api/v1/Auth/SignInValidator';
import User from 'App/Models/User';
import {OpaqueTokenContract} from '@ioc:Adonis/Addons/Auth';
import ISignIn from "App/Interfaces/Auth/ISignIn";


export default class SignInController {

  public async index({auth, request}: HttpContextContract): Promise<ReturnType<OpaqueTokenContract<User>['toJSON']>> {

    const data: ISignIn = await request.validate(SignInvalidator);

    return await auth.use('api').attempt(data.email, data.password, {
      name: request.header('user-agent')
    });

  }
}
