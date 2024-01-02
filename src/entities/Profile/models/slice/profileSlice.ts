import { createSlice } from '@reduxjs/toolkit'

import { type ProfileSchema } from 'entities/Profile/models/types/profile'

const initialState: ProfileSchema = {
  isLoading: false,
  data: null,
  error: null,
  readonly: false

}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  }
})

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice
