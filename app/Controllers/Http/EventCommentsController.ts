import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'
import StoreValidator from 'App/Validators/Comment/StoreValidator'

export default class EventCommentsController {
  public async store({ request, params, response }: HttpContextContract) {
    const event = await Event.find(params.event_id)
    if (!event) {
      return response.notFound('Event not found!')
    }
    const data = await request.validate(StoreValidator)
    await event.related('comment').create(data)
  }
}