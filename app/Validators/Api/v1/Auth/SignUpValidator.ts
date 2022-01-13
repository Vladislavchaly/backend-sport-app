import {rules, schema} from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignUpValidator {
  constructor (protected ctx: HttpContextContract) {
  }
  public schema = schema.create({
    name: schema.string(),
    email: schema.string({}, [
      rules.email(),
      rules.unique({table: 'users', column: 'email'}),
    ]),
    password: schema.string({}, [
      rules.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,30}$/)
    ]),
  })

  public messages = {
    'password.regex': 'Password invalid'
  }
}
