import Joi from 'joi'

const exerciseSchema = Joi.object({
  content: Joi.string().max(100).required(),
  user_id: Joi.string().min(36).max(36).required(),
}).options({ abortEarly: false })

export default exerciseSchema
