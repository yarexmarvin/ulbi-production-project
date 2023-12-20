import { configureStore } from '@reduxjs/toolkit';
import { type StateScheme } from './StateScheme';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: StateScheme) => {
  return configureStore<StateScheme>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
