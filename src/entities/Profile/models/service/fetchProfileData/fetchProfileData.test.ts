import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';
import { fetchProfileData } from 'entities/Profile/models/service/fetchProfileData/fetchProfileData';
import { type Profile } from 'entities/Profile/models/types/profile';
/* eslint-disable @typescript-eslint/unbound-method */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data: Profile = {
  firstname: 'Name',
  lastname: 'Name2',
  age: 21,
  country: COUNTRY.Russia,
  currency: CURRENCY.RUB,
  avatar: '',
  username: 'admin',
  id: '1'
};

describe('fetchProfileData', () => {
  it('should successfully fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toStrictEqual('fulfilled');
    expect(result.payload).toEqual(data);
  });

  it('should reject fetching profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockRejectedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toStrictEqual('rejected');
    expect(result.payload).toBeUndefined();
  });
});
