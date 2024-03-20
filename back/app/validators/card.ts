import vine from '@vinejs/vine'

export const createCardValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string(),
    website: vine.string(),
  })
)

export const updateCardValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string(),
    website: vine.string(),
  })
)
