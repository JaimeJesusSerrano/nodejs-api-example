import { combineReducers } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import ExercisesReducer from './exercises'

const rootReducer = combineReducers({
  exercises: ExercisesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer
