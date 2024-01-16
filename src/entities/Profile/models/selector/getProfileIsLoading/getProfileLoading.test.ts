import { type StateScheme } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileLoading', () => {
  it('should return counter state', () => {
    const state: Pick<StateScheme, 'profile'> = {
      profile: {
        isLoading: true,
        data: null,
        form: null,
        error: null,
        readonly: true,
        validateErrors: []
      }
    }

    expect(getProfileIsLoading(state as StateScheme)).toBeTruthy()
  })
})
