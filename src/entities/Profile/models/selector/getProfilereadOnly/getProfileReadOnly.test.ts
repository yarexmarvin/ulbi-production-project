import { getProfileReadOnly } from 'entities/Profile/models/selector/getProfilereadOnly/getProfileReadOnly';
import { type StateScheme } from 'app/providers/StoreProvider'

describe('getProfileReadOnly', () => {
  it('should return counter state', () => {
    const state: Pick<StateScheme, 'profile'> = {
      profile: {
        isLoading: false,
        data: null,
        form: null,
        error: null,
        readonly: false,
        validateErrors: []
      }
    }

    expect(getProfileReadOnly(state as StateScheme)).toBeFalsy()
  })
})
