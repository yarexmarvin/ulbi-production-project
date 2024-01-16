import { getProfileForm } from './getProfileForm';
import { type StateScheme } from 'app/providers/StoreProvider'
import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';
import { type Profile } from 'entities/Profile/models/types/profile';

describe('getProfileForm', () => {
  it('should return counter state', () => {
    const defaultData: Profile = {
      firstname: 'Name',
      lastname: 'Name2',
      age: 21,
      country: COUNTRY.Russia,
      currency: CURRENCY.RUB,
      avatar: '',
      username: 'admin'
    }

    const state: Pick<StateScheme, 'profile'> = {
      profile: {
        isLoading: false,
        data: null,
        form: defaultData,
        error: null,
        readonly: true,
        validateErrors: []
      }
    }

    expect(getProfileForm(state as StateScheme)).toEqual(defaultData)
  })
})
