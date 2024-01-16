import { updateProfileData } from 'entities/Profile/models/service/updateProfileData/updateProfileData';
import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';
import { ValidationErrors, type Profile } from 'entities/Profile/models/types/profile';
/* eslint-disable @typescript-eslint/unbound-method */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data: Profile = {
  firstname: 'Name',
  lastname: 'Name2',
  age: 21,
  country: COUNTRY.Russia,
  currency: CURRENCY.RUB,
  avatar: '',
  username: 'admin'
}

describe('updateProfileData', () => {
  it('should successfully update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData)
    thunk.getState.mockReturnValue({ profile: { form: data } })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toStrictEqual('fulfilled')
    expect(result.payload).toEqual(data)
  })

  it('should reject updating profile data with validation errors', async () => {
    const thunk = new TestAsyncThunk(updateProfileData)
    thunk.getState.mockReturnValue({ profile: { form: { ...data, firstname: '' } } })

    const result = await thunk.callThunk()

    expect(thunk.api.put).not.toHaveBeenCalled()
    expect(result.meta.requestStatus).toStrictEqual('rejected')
    expect(result.payload).toEqual([ValidationErrors.INCORRECTED_NAME])
  })

  it('should reject fetching profile data with server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData)
    thunk.getState.mockReturnValue({ profile: { form: data } })

    thunk.api.put.mockRejectedValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toStrictEqual('rejected')
    expect(result.payload).toBeUndefined()
  })
})
