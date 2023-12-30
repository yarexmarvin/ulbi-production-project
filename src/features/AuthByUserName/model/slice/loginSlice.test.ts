import { loginInitialState, loginReducer } from 'features/AuthByUserName';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { type LoginSchema } from 'features/AuthByUserName/model/types/loginSchema';

describe('loginSlice', () => {
  it('should set username', () => {
    const state: LoginSchema = loginInitialState;

    const newUserName = { username: 'usernameTest' }

    const result = loginReducer(state, loginActions.setUserName(newUserName.username));

    expect(result).toEqual({ ...loginInitialState, ...newUserName })
  });
  it('should set password', () => {
    const state: LoginSchema = loginInitialState;

    const newPassword = { password: '12345' }

    const result = loginReducer(state, loginActions.setPassword(newPassword.password));

    expect(result).toEqual({ ...loginInitialState, ...newPassword })
  });
})
