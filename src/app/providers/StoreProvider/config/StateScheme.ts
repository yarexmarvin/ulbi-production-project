import { type CounterScheme } from 'entities/Counter';
import { type UserScheme } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';

export interface StateScheme {
  counter?: CounterScheme
  user: UserScheme
  loginForm?: LoginSchema
}
