import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { userReducer, userActions } from './model/slice/userSlice';

import { type UserScheme } from './model/types/user'

export {
  userReducer,
  userActions,
  getUserAuthData,
  type UserScheme
}
