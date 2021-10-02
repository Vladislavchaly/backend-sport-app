'use strict'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import SignInvalidator from 'App/Validators/Api/v1/Auth/SignInValidator';
import User from 'App/Models/User';
import {OpaqueTokenContract} from '@ioc:Adonis/Addons/Auth';

export default class SignInController {

  public async index({auth, request}: HttpContextContract): Promise<ReturnType<OpaqueTokenContract<User>['toJSON']>> {

    await request.validate(SignInvalidator);

    const email: string = request.input('email');
    const password: string = request.input('password');

    return await auth.use('api').attempt(email, password, {
      name: request.header('user-agent')
    });

  }
}
