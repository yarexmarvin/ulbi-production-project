import { loginInitialState } from 'features/AuthByUserName';
import { getLoginState } from './getLoginState';
import { type StateScheme } from 'app/providers/StoreProvider'

describe('getCounter', () => {
  it('should return default loginForm state', () => {
    const state: Pick<StateScheme, 'loginForm'> = {
      loginForm: loginInitialState
    }

    expect(getLoginState(state as StateScheme)).toEqual(loginInitialState)
  })
  it('should return an empty loginForm state', () => {
    const state: Pick<StateScheme, 'loginForm'> = {}

    expect(getLoginState(state as StateScheme)).toBeUndefined()
  })
})
