import {rules, schema} from '@ioc:Adonis/Core/Validator'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class SignInValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    email: schema.string({}, [
      rules.email(),
      rules.exists({table: 'users', column: 'email'}),
    ]),
    password: schema.string()
  })

  public messages = {
    'email.exists': 'User with this email was not found',
  }
}
