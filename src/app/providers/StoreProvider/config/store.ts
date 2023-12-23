import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type StateScheme } from './StateScheme';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
})

export const defaultState: StateScheme = {
  counter: { value: 0 },
  user: {}
}

export const createReduxStore = (initialState?: StateScheme) => {
  return configureStore<StateScheme>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
