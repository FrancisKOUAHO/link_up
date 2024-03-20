import { HttpContext } from '@adonisjs/core/http'
import CardShare from '#models/card_share'

export default class CardSharesController {
  async index({}: HttpContext) {
    return await CardShare.all()
  }

  async create({}: HttpContext) {}

  async store({ request, response }: HttpContext) {
    const data = request.all()
    const cardShare = await CardShare.create(data)

    if (!cardShare) {
      response.abort('Could not create card share')
      return
    }

    return response.created({
      message: 'Card share created successfully',
      cardShare,
    })
  }

  async show({ params, response }: HttpContext) {
    const cardShare = await CardShare.find(params.id)

    if (!cardShare) {
      response.abort('Card share not found')
      return
    }

    return response.ok({
      message: 'Card share found',
      cardShare,
    })
  }

  async edit({ params, response }: HttpContext) {
    const cardShare = await CardShare.find(params.id)

    if (!cardShare) {
      response.abort('Card share not found')
      return
    }

    return response.ok({
      message: 'Card share found',
      cardShare,
    })
  }

  async update({ params, request, response }: HttpContext) {
    const data = request.all()
    const cardShare = await CardShare.find(params.id)

    if (!cardShare) {
      response.abort('Card share not found')
      return
    }

    cardShare.merge(data)
    await cardShare.save()

    return response.ok({
      message: 'Card share updated successfully',
      cardShare,
    })
  }

  async destroy({ params, response }: HttpContext) {
    const cardShare = await CardShare.find(params.id)

    if (!cardShare) {
      response.abort('Card share not found')
      return
    }

    await cardShare.delete()

    return response.ok({
      message: 'Card share deleted successfully',
    })
  }
}
