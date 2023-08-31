import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ActionButton from 'components/atoms/action-button'
import MainTemplate from 'components/templates/main'
import routes from 'config/routes'
import exercisesService from 'services/exercises'

import * as S from './styled'

const List = (): JSX.Element => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const [content, setContent] = useState('')
  const [isContentInvalid, setIsContentInvalid] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsContentInvalid(content?.length > 100)
  }, [content])

  const handleSubmit = async () => {
    const result = await exercisesService.create({
      content: content,
      user_id: userId,
    })

    if (result.error) {
      setError('There is was a server error')
      return
    }

    navigate(routes.exercisesList.path)
  }

  return (
    <MainTemplate>
      <S.Wrapper>
        <div>
          <ActionButton onClick={() => navigate(routes.exercisesList.path)}>
            Go back
          </ActionButton>
        </div>
        <S.Form>
          <label>
            User id:
          </label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />

          <label>
            Content:
          </label>
          <textarea
            name="content"
            onChange={(event) => setContent(event.target.value)}
            value={content}
          />
          
          {isContentInvalid ? 'Please shorten your exercise!': ''}

          <button disabled={isContentInvalid} onClick={handleSubmit} type="button">
            Create
          </button>

          {error ? error : ''}
        </S.Form>
      </S.Wrapper>
    </MainTemplate>
  )
}

export default List
