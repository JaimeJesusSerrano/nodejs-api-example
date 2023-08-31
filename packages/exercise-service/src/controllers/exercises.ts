import { Request, Response } from 'express'

import postExercisesValidatorSchema from '../validators/postExercises'
import exercisesService from '../services/exercises'

export const getAll = async (req: Request, res: Response) => {
  try {
    res.send(await exercisesService.getAll())
  } catch (e) {
    return res.status(500).send({
      error: 'There is was an error',
    })
  }
}

export const create = async (req: Request, res: Response) => {
  const dataToValidate = req.body

  const result = postExercisesValidatorSchema.validate(dataToValidate)
  if (result.error) {
    return res.status(400).send({
      error: result.error.message,
    })
  }

  try {
    const newExercise = await exercisesService.create(result.value)
    
    if (!newExercise) {
      return res.status(400).send({
        error: 'There is was an error',
      })
    }
    res.send(newExercise)
  } catch (e) {
    return res.status(500).send({
      error: 'There is was an error',
    })
  }
}

export default { create, getAll }
