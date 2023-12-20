import { counterActions, counterReducer } from 'entities/Counter/model/slice/counterSlice'
import { type CounterScheme } from 'entities/Counter/model/types/CounterScheme'

describe('counterSlice', () => {
  it('should decrement counter value by 1 ', () => {
    const state: CounterScheme = { value: 10 }

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
  })
  it('should increment counter value by 1 ', () => {
    const state: CounterScheme = { value: 10 }

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
  })
  it('should increment initial counter value by 1 ', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
  })
})
