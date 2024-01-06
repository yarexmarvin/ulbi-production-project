import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from 'entities/Profile/models/service/fetchProfileData/fetchProfileData'

import { type Profile, type ProfileSchema } from 'entities/Profile/models/types/profile'

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

  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.data = payload
        state.isLoading = false
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.data = null
        state.error = payload
        state.isLoading = false
      })
      .addCase(fetchProfileData.pending, (state) => {
        state.error = ''
        state.isLoading = true
      })
  }
})

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice
