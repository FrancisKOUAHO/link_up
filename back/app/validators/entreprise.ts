import vine from '@vinejs/vine'

export const createEntrepriseValidator = vine.compile(
  vine.object({
    name: vine.string(),
    address: vine.string(),
    phone: vine.string(),
  })
)
