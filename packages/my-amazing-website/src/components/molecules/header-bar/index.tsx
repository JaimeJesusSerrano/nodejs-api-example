import React from 'react'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import routes from 'config/routes'

import * as S from './styled'

const HeaderBar = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <S.Title to={routes.home.path}>{t('component.header.title')}</S.Title>
    </S.Wrapper>
  )
}

export default HeaderBar
