import { type ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Profile } from 'entities/Profile/models/types/profile';
import { getProfileForm } from 'entities/Profile/models/selector/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { getState, rejectWithValue, extra }) => {
    const formData = getProfileForm(getState());

    try {
      const response = await extra?.api?.put<Profile>('/profile', formData)

      return response.data;
    } catch (error: any) {
      console.warn('error in updateProfileData', error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  })
