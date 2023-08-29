import crypto from 'crypto'

import db from '../config/sqlite3'
import IExerciseModel from '../../types/ExerciseModel'
import { ExerciseToCreate as IExerciseToCreate } from '../../types/Exercise'
import IExerciseJoinUserModel from '../../types/ExerciseJoinUserModel'

export const create = async (data: IExerciseToCreate): Promise<boolean> => {
  const sql = `INSERT INTO exercise(id, user_id, content, created_at) VALUES("${crypto.randomUUID()}", "${data.user_id}", "${data.content}", "${new Date()}")`

  return new Promise((resolve, reject) => {
    db.run(
      sql,
      (e) => {
        if (e) {
          console.error(e)
          reject(e)
        }
  
        resolve(true)
      }
    )
  })
}

export const getAll = async (): Promise<IExerciseModel[]> => {
  const sql = 'select * from exercise'

  return new Promise((resolve, reject) => {
    db.all(sql, [], (e, rows: IExerciseModel[]) => {
      if (e) {
        console.error(e)
        reject(e)
      }

      resolve(rows)
    })
  })
}

export const getAllJoinUser = async (): Promise<IExerciseJoinUserModel[]> => {
  const sql = 'SELECT * FROM exercise JOIN user ON exercise.user_id = user.id'

  return new Promise((resolve, reject) => {
    db.all(sql, [], (e, rows: IExerciseJoinUserModel[]) => {
      if (e) {
        console.error(e)
        reject(e)
      }

      resolve(rows)
    })
  })
}

export default { create, getAll, getAllJoinUser }
