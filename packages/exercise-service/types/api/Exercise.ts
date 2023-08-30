export interface User {
  name: string
}

export interface Exercise {
  id: string
  user_id: string
  content: string
  created_at: string
  user: User
}

export interface ExerciseToCreate extends Omit<Exercise, 'id' | 'created_at' | 'user'> {}

export default Exercise
