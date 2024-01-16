import { COUNTRY } from 'entities/Country';

import { profileActions, profileReducer } from 'entities/Profile/models/slice/profileSlice';
import { type Profile, ValidationErrors, type ProfileSchema } from 'entities/Profile/models/types/profile';

import { CURRENCY } from 'entities/Currency';

import { fetchProfileData } from 'entities/Profile/models/service/fetchProfileData/fetchProfileData';
import { type Action } from '@reduxjs/toolkit';

const profileData: Profile = {
  firstname: 'Name',
  lastname: 'Name2',
  age: 21,
  country: COUNTRY.Russia,
  currency: CURRENCY.RUB,
  avatar: '',
  username: 'admin'
}

const initialState: ProfileSchema = {
  readonly: true,
  data: profileData,
  form: null,
  isLoading: false,
  validateErrors: [],
  error: ''
}

describe('profileSlice', () => {
  it('should set readonly to false', () => {
    const state: ProfileSchema = initialState

    const result = profileReducer(state, profileActions.setReadOnly(false));

    expect(result.readonly).toBeFalsy()
  })
  it('should set validation errors', () => {
    const state: ProfileSchema = initialState

    const errors: ValidationErrors[] = [ValidationErrors.INCORRECTED_NAME, ValidationErrors.INCORRECTED_AGE]
    const result = profileReducer(state, profileActions.setValidationErrors(errors));

    expect(result.validateErrors).toEqual(errors)
  })
  it('should cancel edit', () => {
    const state: ProfileSchema = initialState

    const result = profileReducer(state, profileActions.cancelEdit());

    expect(result.form).toEqual(profileData)
    expect(result.readonly).toBeTruthy()
  })
  it('should update profile data', () => {
    const state: ProfileSchema = initialState

    const newProfileData: Profile = { ...state.data, firstname: 'Test1', age: 21 }

    const result = profileReducer(state, profileActions.updateProfile(newProfileData));

    expect(result.form).toEqual(newProfileData)
  })

  it('should set errors to empty string and isLoading to true when pending', () => {
    const state: ProfileSchema = initialState

    expect(state.isLoading).toBeFalsy()
    const result = profileReducer(state, fetchProfileData.pending as Action);

    expect(result.isLoading).toBeTruthy()
  })
  it('should set profileData when fulfilled fetching', () => {
    const state: ProfileSchema = { ...initialState, data: null, isLoading: true }

    const result = profileReducer(state, fetchProfileData.fulfilled(profileData, '') as Action);

    expect(result.data).toEqual(profileData)
    expect(result.isLoading).toBeFalsy()
  })
  it('should set error when rejected fetching', () => {
    const state: ProfileSchema = { ...initialState, data: null, isLoading: true }

    const errorLabel = 'server error'

    const action = { type: fetchProfileData.rejected.type, payload: errorLabel }

    const result = profileReducer(state, action);

    expect(result.error).toEqual(errorLabel)
    expect(result.isLoading).toBeFalsy()
  })
})
