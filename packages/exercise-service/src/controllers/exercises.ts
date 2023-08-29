import { Request, Response } from 'express'

import postExercisesValidatorSchema from '../validators/postExercises'
import exercisesService from '../services/exercises'

export const getAll = async (req: Request, res: Response) => {
  res.send(await exercisesService.getAll())
}

export const create = async (req: Request, res: Response) => {
  const dataToValidate = req.body

  const result = postExercisesValidatorSchema.validate(dataToValidate)
  if (result.error) {
    return res.send(result.error.message)
  }

  res.send(await exercisesService.create(result.value))
}

export default { create, getAll }
