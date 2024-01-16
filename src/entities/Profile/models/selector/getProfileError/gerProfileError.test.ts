import { type StateScheme } from 'app/providers/StoreProvider'
import { getProfileError } from 'entities/Profile/models/selector/getProfileError/getProfileError';

describe('getProfileError', () => {
  it('should return counter state', () => {
    const state: Pick<StateScheme, 'profile'> = {
      profile: {
        isLoading: false,
        data: null,
        form: null,
        error: 'error',
        readonly: true,
        validateErrors: []
      }
    }

    expect(getProfileError(state as StateScheme)).toEqual('error')
  })
})
