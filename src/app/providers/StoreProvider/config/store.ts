import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type StateScheme } from './StateScheme';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { api } from 'shared/api/api';
import { type NavigateOptions, type To } from 'react-router-dom';

export const reducers = {
  counter: counterReducer,
  user: userReducer

}

const rootReducer = combineReducers(reducers)

export const defaultState: StateScheme = {
  counter: { value: 0 },
  user: {
    _inited: true
  }

}

export const createReduxStore = (initialState?: StateScheme, navigate?: (to: To, options?: NavigateOptions) => void) => {
  return configureStore<StateScheme>({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          navigate
        }
      }
    })
  })
}

export type AppReducer = typeof reducers
export type RootReducer = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
