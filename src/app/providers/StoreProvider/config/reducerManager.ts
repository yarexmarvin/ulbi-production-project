import { type Reducer, combineReducers, type AnyAction } from '@reduxjs/toolkit'
import { type StateSchemaKey, type StateScheme } from './StateScheme'
import { type RootReducer, type AppReducer } from './store'

export interface ReducerManager {
  getReducerMap: () => AppReducer
  reduce: (state: StateScheme, action: AnyAction) => RootReducer
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export function createReducerManager (initialReducers: AppReducer): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateScheme, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      // @ts-ignore
      if (!key || reducers[key]) {
        return
      }
      // @ts-ignore
      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKey) => {
      // @ts-ignore
      if (!key || !reducers[key]) {
        return
      }
      // @ts-ignore
      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}
