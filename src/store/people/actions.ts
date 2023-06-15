import type * as T from './types'
import * as D from '../../data'

export const addAction = (payload: D.IPerson): T.addAction => ({
  type: '@person/add',
  payload
})

export const deleteAction = (id: string): T.deleteAction => ({
  type: '@person/delete',
  payload: { id }
})

export const deleteAllAction = (): T.deleteAllAction => ({
  type: '@person/deleteAll'
})