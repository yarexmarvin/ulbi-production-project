import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type StateScheme } from './StateScheme';

import { loginInitialState, loginReducer } from 'features/AuthByUserName';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  loginForm: loginReducer
})

export const defaultState: StateScheme = {
  counter: { value: 0 },
  user: {},
  loginForm: loginInitialState
}

export const createReduxStore = (initialState?: StateScheme) => {
  return configureStore<StateScheme>({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: __IS_DEV__
  })
}
