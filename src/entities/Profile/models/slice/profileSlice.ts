import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchProfileData } from 'entities/Profile/models/service/fetchProfileData/fetchProfileData'
import { updateProfileData } from 'entities/Profile/models/service/updateProfileData/updateProfileData'

import { type Profile, type ProfileSchema } from 'entities/Profile/models/types/profile'

const initialState: ProfileSchema = {
  isLoading: false,
  data: null,
  form: null,
  error: null,
  readonly: true

}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data
    },
    updateProfile: (state, { payload }: PayloadAction<Partial<Profile>>) => {
      state.form = {
        ...state.form,
        ...payload
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.data = payload
        state.form = payload
        state.isLoading = false
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.data = null
        state.form = null
        state.error = payload
        state.isLoading = false
      })
      .addCase(fetchProfileData.pending, (state) => {
        state.error = ''
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, { payload }: PayloadAction<Profile>) => {
        state.data = payload
        state.form = payload
        state.readonly = true
        state.isLoading = false
      })
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.error = payload
        state.isLoading = false
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = ''
        state.isLoading = true
      })
  }
})

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice
