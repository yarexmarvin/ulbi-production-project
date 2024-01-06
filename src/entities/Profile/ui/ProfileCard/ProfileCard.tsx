import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/models/selector/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/models/selector/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/models/selector/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';

interface ProfileCardProps {
  className?: string
}

export function ProfileCard (props: PropsWithChildren<ProfileCardProps>) {
  const { className } = props;

  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  return (<div
    className={classNames({ cls: cls.ProfileCard, mods: {}, additional: [className] })}
  >
    <div className={cls.header}>

      <Text title={t('Профиль пользователя')} />
      <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>
        {t('Редактировать')}
      </Button>
    </div>

    <div className={cls.data}>
      <Input className={cls.input} value={data?.firstname} placeholder='Ваше имя' />
      <Input className={cls.input} value={data?.lastname} placeholder='Ваша фамилия' />
    </div>

  </div>);
}
