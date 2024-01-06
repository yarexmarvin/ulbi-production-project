/* eslint-disable @typescript-eslint/unbound-method */
import { loginByUserName } from './loginByUserName';

import { userActions } from 'entities/User';
import { type User } from 'entities/User/model/types/user';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUserName', () => {
  it('should successfully log in', async () => {
    const user: User = { username: 'admin', id: '1' }

    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: user }))
    const result = await thunk.callThunk({ username: 'admin', password: '12345' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUser(user))
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.payload).toEqual({ username: 'admin', id: '1' })
    expect(result.meta.requestStatus).toStrictEqual('fulfilled')
  })

  it('should reject login', async () => {
    const thunk = new TestAsyncThunk(loginByUserName)
    thunk.api.post.mockRejectedValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: 'admin', password: '12345' })

    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.payload).toBeUndefined()
    expect(result.meta.requestStatus).toStrictEqual('rejected')
  })
})
