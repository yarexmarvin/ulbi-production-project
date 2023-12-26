import { useCallback, memo } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import { useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginState } from '../..//model/selectors/getLoginState/getLoginState';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  // const dispatch = useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const { t } = useTranslation('loginForm')

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value))
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch]);

  const handleOnLogin = useCallback(async () => {
    await dispatch(loginByUserName({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames({ cls: cls.LoginForm, mods: {}, additional: [className] })}>
      <Text title={t('Форма авторизации')} />
      {!!error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        value={username}
        onChange={onChangeUserName}
        autoFocus
        placeholder={t('Введите логин')}
        className={cls.input}
        type='text' />

      <Input
        value={password}
        onChange={onChangePassword}
        placeholder={t('Введите пароль')}
        className={cls.input}
        type='text' />

      <Button disabled={isLoading} className={cls.loginButton} theme={ThemeButton.OUTLINE} onClick={handleOnLogin}>
        {t('Войти')}
      </Button>

    </div>
  );
})
