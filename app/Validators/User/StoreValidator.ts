import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.required()]),
    email: schema.string({}, [rules.required(), rules.email()]),
    cellPhoneNumber: schema.string({}, [rules.required()]),
    instagramRef: schema.string.optional({}, []),
    photoUrl: schema.string.optional({}, []),
  })

  public messages = {
    'name.required': 'É necessário informar o nome de usuário!',
    'email.required': 'É necessário informar o email!',
    'email.email': 'Formato de email inválido!',
  }
}