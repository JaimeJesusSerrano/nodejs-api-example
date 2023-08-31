import axios from 'config/axios'
import { ExerciseToCreate as IExerciseToCreate } from 'types/api/Exercise'

const ENDPOINT = 'exercises'

export const create = async (data: IExerciseToCreate) => {
  return axios
    .post(`${process.env.REACT_APP_EXERCISE_SERVICE_URL}/${ENDPOINT}`, data)
    .then((result) => result?.data)
    .catch((e) => {
      console.error(e)
      return { data: [], error: true }
    })
}

export const getAll = async () => {
  return axios
    .get(`${process.env.REACT_APP_EXERCISE_SERVICE_URL}/${ENDPOINT}`)
    .then((result) => result?.data)
    .catch((e) => {
      console.error(e)
      return { data: [], error: true }
    })
}

export default { create, getAll }
