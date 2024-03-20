import { HttpContext } from '@adonisjs/core/http'
import Enterprise from '#models/enterprise'
import { createEntrepriseValidator } from '#validators/entreprise'

export default class EnterprisesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const enterprises: Enterprise[] = await Enterprise.all()

    return enterprises
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

    const validator = createEntrepriseValidator.validate(data)

    if (!validator) {
      response.abort(validator)
      return
    }

    const enterprise: Enterprise = await Enterprise.create(data)

    if (!enterprise) {
      response.abort('Could not create lead')
      return
    }

    return response.created({
      message: 'Lead created successfully',
      enterprise,
    })
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const enterprise: Enterprise | null = await Enterprise.find(params.id)

    if (!enterprise) {
      response.abort('Lead not found')
      return
    }

    return response.ok({
      message: 'Lead found',
      enterprise,
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const enterprise: Enterprise | null = await Enterprise.find(params.id)

    if (!enterprise) {
      response.abort('Lead not found')
      return
    }

    return response.ok({
      message: 'Lead found',
      enterprise,
    })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const enterprise: Enterprise | null = await Enterprise.find(params.id)

    if (!enterprise) {
      response.abort('Lead not found')
      return
    }

    const data = request.all()

    const validator = createEntrepriseValidator.validate(data)

    if (!validator) {
      response.abort(validator)
      return
    }

    enterprise.merge(data)

    await enterprise.save()

    return response.ok({
      message: 'Lead updated successfully',
      enterprise,
    })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const enterprise: Enterprise | null = await Enterprise.find(params.id)

    if (!enterprise) {
      response.abort('Lead not found')
      return
    }

    await enterprise.delete()

    return response.ok({
      message: 'Lead deleted successfully',
    })
  }
}
