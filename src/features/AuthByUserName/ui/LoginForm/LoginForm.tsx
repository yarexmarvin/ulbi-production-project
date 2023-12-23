import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';

interface LoginFormProps {
  className?: string
}

export function LoginForm (props: PropsWithChildren<LoginFormProps>) {
  const { className } = props;

  const { t } = useTranslation('loginForm')

  return (
    <div className={classNames({ cls: cls.LoginForm, mods: {}, additional: [className] })}>

      <Input autoFocus placeholder={t('Введите логин')} className={cls.input} type='text' />
      <Input placeholder={t('Введите пароль')} className={cls.input} type='text' />
      <Button className={cls.loginButton}>
        {t('Войти')}
      </Button>
    </div>
  );
}
