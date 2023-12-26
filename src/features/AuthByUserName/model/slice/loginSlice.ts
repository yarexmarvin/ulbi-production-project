import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type LoginSchema } from '../types/loginSchema';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

export const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.username = payload
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUserName.fulfilled, (state, { payload }) => {
        state.username = payload.username
        state.isLoading = false
      })
      .addCase(loginByUserName.rejected, (state, { payload }) => {
        state.username = ''
        state.error = payload
        state.isLoading = false
      })
      .addCase(loginByUserName.pending, (state) => {
        state.error = ''
        state.isLoading = true
      })
  }
})
export const { actions: loginActions, reducer: loginReducer } = loginSlice
