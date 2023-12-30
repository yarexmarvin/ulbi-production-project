/* eslint-disable @typescript-eslint/unbound-method */
import axios from 'axios';
import { loginByUserName } from './loginByUserName';

import { userActions } from 'entities/User';
import { type User } from 'entities/User/model/types/user';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

describe('loginByUserName', () => {
  it('should successfully log in', async () => {
    const user: User = { username: 'admin', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }))

    const thunk = new TestAsyncThunk(loginByUserName)
    const result = await thunk.callThunk({ username: 'admin', password: '12345' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUser(user))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.payload).toEqual({ username: 'admin', id: '1' })
    expect(result.meta.requestStatus).toStrictEqual('fulfilled')
  })

  it('should reject login', async () => {
    mockedAxios.post.mockRejectedValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUserName)
    const result = await thunk.callThunk({ username: 'admin', password: '12345' })

    console.log(result)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.payload).toBeUndefined()
    expect(result.meta.requestStatus).toStrictEqual('rejected')
  })
})
