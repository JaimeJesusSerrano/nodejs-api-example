import React from 'react'

import TitleH2 from 'components/atoms/title-h2'
import IExercise from 'types/api/Exercise'

import * as S from './styled'
import { formatDate } from 'utils/dates'

type ParamTypes = {
  exercise: IExercise
}

const ExerciseCard = ({ exercise }: ParamTypes): JSX.Element => {
  if (!exercise) return <></>

  return (
    <S.Wrapper>
      <div><TitleH2>{exercise.user?.name}</TitleH2></div>
      <div>Content: {exercise.content}</div>
      <div>Create At: {exercise.created_at ? formatDate(exercise.created_at) : ''}</div>
    </S.Wrapper>
  )
}

export default ExerciseCard
