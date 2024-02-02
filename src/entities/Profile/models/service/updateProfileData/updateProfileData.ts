import { type ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  type ValidationErrors,
  type Profile
} from 'entities/Profile/models/types/profile';
import { getProfileForm } from 'entities/Profile/models/selector/getProfileForm/getProfileForm';
import { validateProfile } from 'entities/Profile/models/service/validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<
Profile,
string,
ThunkConfig<ValidationErrors[] | string>
>(
  'profile/updateProfileData',
  async (id, { getState, rejectWithValue, extra }) => {
    const formData = getProfileForm(getState());
    console.log(formData);
    const errors = validateProfile(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra?.api?.put<Profile>(
        `/profile/${id}`,
        formData
      );

      return response.data;
    } catch (error: any) {
      console.warn('error in updateProfileData', error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
