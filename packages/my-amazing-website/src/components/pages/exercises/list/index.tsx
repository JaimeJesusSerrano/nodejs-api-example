import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MainTemplate from 'components/templates/main'
import ActionButton from 'components/atoms/action-button'
import routes from 'config/routes'
import exercisesService from 'services/exercises'
import { useTypedSelector } from 'store/reducers'
import IExercise from 'types/api/Exercise'

import ExerciseCard from './components/exercise-card'
import * as S from './styled'

const List = (): JSX.Element => {
  const navigate = useNavigate()
  const [exercises, setExercises] = useState<IExercise[]>([])

  const handleClick = () => navigate(routes.exercisesCreate.path)

  const fetchExercises = async () => {
    const exercises = await exercisesService.getAll()
    setExercises(exercises)
    // dispatch({
    //   type:
    //   payload:
    // })
  }

  useEffect(() => {
    fetchExercises()
  }, [])

  return (
    <MainTemplate>
      <S.Wrapper>
        <div>
          <ActionButton onClick={handleClick}>Create</ActionButton>
        </div>
        <S.ExercisesWrapper>
        <S.ListWrapper>
          {exercises.map(exercise => {
            return <ExerciseCard key={exercise.id} exercise={exercise} />
          })}
        </S.ListWrapper>
        </S.ExercisesWrapper>
      </S.Wrapper>
    </MainTemplate>
  )
}

export default List
