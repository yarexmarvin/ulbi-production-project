import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserScheme } from '../types/user'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'

const initialState: UserScheme = {

}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload
    },
    logOut: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);

      state.authData = undefined
    },
    initUser: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user)
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: userActions, reducer: userReducer } = userSlice
