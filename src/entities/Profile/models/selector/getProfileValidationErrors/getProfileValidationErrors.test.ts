import { getProfileValidationErrors } from 'entities/Profile/models/selector/getProfileValidationErrors/getProfileValidationErrors';
import { type StateScheme } from 'app/providers/StoreProvider'
import { ValidationErrors } from 'entities/Profile/models/types/profile';

const errors = [ValidationErrors.INCORRECTED_NAME, ValidationErrors.INCORRECTED_AGE]
describe('getProfileValidationErrors', () => {
  it('should return counter state', () => {
    const state: Pick<StateScheme, 'profile'> = {
      profile: {
        isLoading: false,
        data: null,
        form: null,
        error: null,
        readonly: false,
        validateErrors: errors
      }
    }

    expect(getProfileValidationErrors(state as StateScheme)).toHaveLength(errors.length)
    expect(getProfileValidationErrors(state as StateScheme)).toEqual(errors)
  })
})
