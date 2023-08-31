import { lazy, LazyExoticComponent } from 'react'

const Home = lazy(() => import(/* webpackChunkName: "PageNotFound" */ 'components/pages/home'))
const PageNotFound = lazy(() => import(/* webpackChunkName: "PageNotFound" */ 'components/pages/page-not-found'))
const ExerciseCreate = lazy(() => import(/* webpackChunkName: "ExerciseCreate" */ 'components/pages/exercises/create'))
const ExercisesList = lazy(() => import(/* webpackChunkName: "ExercisesList" */ 'components/pages/exercises/list'))

type JSXComponent = () => JSX.Element

export interface IRoutes {
  [key: string]: IRoute
}

export interface IRoute {
  component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
  path: string
}

const routes: IRoutes = {
  home: {
    component: Home,
    name: 'home',
    path: '/',
  },
  pageNotFound: {
    component: PageNotFound,
    name: 'Page not found',
    path: '/page-not-found',
  },
  exercisesList: {
    component: ExercisesList,
    name: 'Exercises',
    path: '/exercises',
  },
  exercisesCreate: {
    component: ExerciseCreate,
    name: 'Create exercise',
    path: '/create',
  },
}

export default routes
