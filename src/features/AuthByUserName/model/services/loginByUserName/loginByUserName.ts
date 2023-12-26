import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entities/User';
import { type User } from 'entities/User/model/types/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUserNameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
  'loginForm/loginByUserName',
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)

      if (!response.data) throw new Error('User not found');

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

      dispatch(userActions.setUser(response.data))

      return response.data;
    } catch (error) {
      console.warn('error in loginByUserName', error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  })
