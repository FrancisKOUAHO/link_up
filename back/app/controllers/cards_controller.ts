import { HttpContext } from '@adonisjs/core/http'
import Card from '#models/card'
import { createCardValidator, updateCardValidator } from '#validators/card'
import app from '@adonisjs/core/services/app'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const cards: Card[] = await Card.all()

    return cards
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()

    const validator = createCardValidator.validate(data)

    if (!validator) {
      response.abort(validator)
      return
    }

    const card: Card = await Card.create(data)

    if (!card) {
      response.abort('Could not create card')
      return
    }

    return response.created({
      message: 'Card created successfully',
      card,
    })
  }

  async upload({ request, response }: HttpContext) {
    const avatar = request.file('avatar', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })

    console.log(avatar)

    if (!avatar) {
      response.abort('Please upload an avatar')
      return
    }

    await avatar.move(app.makePath('uploads'))

    const cardImage: Card = await Card.create({
      image: avatar.fileName,
    })

    if (!cardImage) {
      response.abort('Could not create resource')
      return
    }

    return response.created({
      message: 'Resource created successfully',
      cardImage,
    })
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const card: Card | null = await Card.find(params.id)

    if (!card) {
      response.abort('Card not found')
      return
    }

    return response.ok({
      message: 'Card found',
      card,
    })
  }

  /**
   * Edit individual record
   */

  async edit({ params, response }: HttpContext) {
    const card: Card | null = await Card.find(params.id)

    if (!card) {
      response.abort('Card not found')
      return
    }

    return response.ok({
      message: 'Card found',
      card,
    })
  }

  /**
   * Display form to edit individual record
   */

  async update({ params, request, response }: HttpContext) {
    const card: Card | null = await Card.find(params.id)

    if (!card) {
      response.abort('Card not found')
      return
    }

    const data = request.all()

    const validator = updateCardValidator.validate(data)

    if (!validator) {
      response.abort(validator)
      return
    }

    card.merge(data)

    await card.save()

    return response.ok({
      message: 'Card updated successfully',
      card,
    })
  }

  /**
   * Delete individual record
   */
  async destroy({ params, response }: HttpContext) {
    const card: Card | null = await Card.find(params.id)

    if (!card) {
      response.abort('Card not found')
      return
    }

    await card.delete()

    return response.ok({
      message: 'Card deleted successfully',
    })
  }
}
