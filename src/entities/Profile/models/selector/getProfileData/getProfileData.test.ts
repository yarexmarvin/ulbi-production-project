import { getProfileData } from './getProfileData';
import { type StateScheme } from 'app/providers/StoreProvider';
import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';
import { type Profile } from 'entities/Profile/models/types/profile';

describe('getProfileData', () => {
  it('should return counter state', () => {
    const defaultData: Profile = {
      firstname: 'Name',
      lastname: 'Name2',
      age: 21,
      country: COUNTRY.Russia,
      currency: CURRENCY.RUB,
      avatar: '',
      username: 'admin',
      id: '1'
    };

    const state: Pick<StateScheme, 'profile'> = {
      profile: {
        isLoading: false,
        data: defaultData,
        form: null,
        error: null,
        readonly: true,
        validateErrors: []
      }
    };

    expect(getProfileData(state as StateScheme)).toEqual(defaultData);
  });
});
