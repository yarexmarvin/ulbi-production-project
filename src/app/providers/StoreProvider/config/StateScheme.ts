import {
  type ThunkDispatch,
  type EnhancedStore,
  type AnyAction
} from '@reduxjs/toolkit';
import { type ReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { type RootReducer } from 'app/providers/StoreProvider/config/store';
import { type AxiosInstance } from 'axios';
import { type ArticleDetailsSchema } from 'entities/Article';
import { type CounterScheme } from 'entities/Counter';
import { type ProfileSchema } from 'entities/Profile';
import { type UserScheme } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { type NavigateOptions, type To } from 'react-router-dom';

export interface StateScheme {
  counter: CounterScheme
  user: UserScheme
  // async
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
}

console.log('');

export type StateSchemaKey = keyof StateScheme;

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager?: ReducerManager
}

export type AppThunkDispatch = ThunkDispatch<RootReducer, any, AnyAction>;

export interface ThunkExtraArgs {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgs
  state: StateScheme
}
