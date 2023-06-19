import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import { logger } from './logger'
import thunk from 'redux-thunk'

export const makeStore = () => {
  let middlewares: any[] = [thunk]
  if (__DEV__) { // 개발 모드일 경우, 적용!
    middlewares.push(logger)
  }
  return createStore(rootReducer, applyMiddleware(...middlewares))
}