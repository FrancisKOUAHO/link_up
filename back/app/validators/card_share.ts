import vine from '@vinejs/vine'

export const createCardShareValidator = vine.compile(
  vine.object({
    shared_at: vine.string(),
  })
)

export const updateCardShareValidator = vine.compile(
  vine.object({
    shared_at: vine.string(),
  })
)
