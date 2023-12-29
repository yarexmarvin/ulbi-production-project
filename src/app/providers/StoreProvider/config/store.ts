import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type StateScheme } from './StateScheme';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
// import { loginInitialState } from 'features/AuthByUserName';
// import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';

export const reducers = {
  counter: counterReducer,
  user: userReducer
  // async
  // loginForm: loginReducer
}

const rootReducer = combineReducers(reducers)

export const defaultState: StateScheme = {
  counter: { value: 0 },
  user: {}
  // loginForm: loginInitialState
}

// const reducerManager = createReducerManager(reducers)

// console.log('rootReducer', rootReducer)

// export const createReduxStore = (initialState?: StateScheme) => {
//   return configureStore<StateScheme>({
//     reducer: rootReducer,
//     preloadedState: initialState,
//     devTools: __IS_DEV__
//   })
// }

// export const configureStore = (initialState: StateScheme) => {
//   const reducerManager = createReducerManager(reducers)

//   // Create a store with the root reducer function being the one exposed by the manager.
//   const store = createStore(reducerManager.reduce, initialState)

//   // Optional: Put the reducer manager on the store so it is easily accessible
//   // @ts-ignore
//   store.reducerManager = reducerManager

//   return store;
// }

// export const store = configureStore(defaultState)

export const store = configureStore<StateScheme>({
  reducer: rootReducer,
  preloadedState: defaultState,
  devTools: __IS_DEV__
})

// @ts-ignore
// store.reducerManager = reducerManager

export type AppReducer = typeof reducers
export type RootReducer = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
