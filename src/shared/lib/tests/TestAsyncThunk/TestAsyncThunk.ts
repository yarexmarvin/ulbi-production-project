import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type StateScheme } from 'app/providers/StoreProvider'
import axios, { type AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {
  rejectValue: RejectedValue
}>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateScheme;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.api = mockedAxios;
    this.navigate = jest.fn()
  }

  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<any>

  callThunk = async (arg: Arg) => {
    const action = this.actionCreator(arg);

    const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

    return result;
  }
}
