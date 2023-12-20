import { type StateScheme } from 'app/providers/StoreProvider'

import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue'

describe('getCounterValue', () => {
  it('should return counter state value', () => {
    const state: Partial<StateScheme> = {
      counter: {
        value: 10
      }
    }

    expect(getCounterValue(state)).toEqual(10)
  })
})
