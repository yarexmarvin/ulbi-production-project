import { type StateScheme } from 'app/providers/StoreProvider'
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter'

describe('getCounter', () => {
  it('should return counter state', () => {
    const state: Partial<StateScheme> = {
      counter: {
        value: 10
      }
    }

    expect(getCounter(state)).toEqual({
      value: 10
    })
  })
})
