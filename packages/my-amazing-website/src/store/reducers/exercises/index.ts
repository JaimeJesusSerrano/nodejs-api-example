import IExercise from 'types/api/Exercise'

export enum Actions {
  DEFAULT = 'DEFAULT',
  SET = 'SET',
}

interface IInitStateProps extends IExercise {}

interface IReducerAction {
  type: Actions
  payload: IInitStateProps
}

const Reducer = (
  state: IInitStateProps | null = null,
  action: IReducerAction
) => {
  switch (action.type) {
    case Actions.SET:
      return action.payload

    default:
      return state
  }
}

export default Reducer
