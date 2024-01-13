import { type ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Profile } from 'entities/Profile/models/types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra?.api?.get<Profile>('/profile')

      return response.data;
    } catch (error: any) {
      console.warn('error in fetchProfileData', error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  })
