import { type ThunkDispatch, type EnhancedStore, type AnyAction } from '@reduxjs/toolkit';
import { type ReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { type RootReducer } from 'app/providers/StoreProvider/config/store';
import { type CounterScheme } from 'entities/Counter';
import { type ProfileSchema } from 'entities/Profile';
import { type UserScheme } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';

export interface StateScheme {
  counter?: CounterScheme
  user: UserScheme
  // async
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateScheme

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager?: ReducerManager
}

export type AppThunkDispatch = ThunkDispatch<RootReducer, any, AnyAction>;
