import crypto from 'crypto'

import db from '../config/sqlite3'
import IRepositoryExercise from '../../types/repositories/Exercise'
import { ExerciseToCreate as IApiExerciseToCreate } from '../../types/api/Exercise'
import IExerciseJoinUser from '../../types/ExerciseJoinUser'

export const create = async (data: IApiExerciseToCreate): Promise<boolean> => {
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

export const getAll = async (): Promise<IRepositoryExercise[]> => {
  const sql = 'select * from exercise'

  return new Promise((resolve, reject) => {
    db.all(sql, [], (e, rows: IRepositoryExercise[]) => {
      if (e) {
        console.error(e)
        reject(e)
      }

      resolve(rows)
    })
  })
}

export const getAllJoinUser = async (): Promise<IExerciseJoinUser[]> => {
  const sql = 'SELECT * FROM exercise JOIN user ON exercise.user_id = user.id'

  return new Promise((resolve, reject) => {
    db.all(sql, [], (e, rows: IExerciseJoinUser[]) => {
      if (e) {
        console.error(e)
        reject(e)
      }

      resolve(rows)
    })
  })
}

export default { create, getAll, getAllJoinUser }
