import { type ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { userActions } from 'entities/User';
import { type User } from 'entities/User/model/types/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUserNameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
  'loginForm/loginByUserName',
  async (authData, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra?.api?.post<User>('/login', authData)

      if (!response?.data) throw new Error('User not found');

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response?.data));

      console.info('response.data', response?.data)
      dispatch(userActions.setUser(response?.data))

      extra.navigate('/profile')

      return response?.data;
    } catch (error: any) {
      console.warn('error in loginByUserName', error)
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue(error?.response?.data?.message);
    }
  })
