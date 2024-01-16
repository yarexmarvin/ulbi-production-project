import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input';
import { type Profile } from 'entities/Profile/models/types/profile';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { type CURRENCY, CurrencySelect } from 'entities/Currency';
import { CountrySelect, type COUNTRY } from 'entities/Country';

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readOnly?: boolean
  onChangeFirstName?: (value?: string) => void
  onChangeLastName?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: CURRENCY) => void
  onChangeCountry?: (value?: COUNTRY) => void
}

export function ProfileCard (props: PropsWithChildren<ProfileCardProps>) {
  const { className, data, isLoading, error, readOnly, onChangeFirstName, onChangeLastName, onChangeCountry, onChangeAge, onChangeAvatar, onChangeCurrency } = props;

  if (isLoading) {
    return <div
      className={classNames({ cls: cls.ProfileCard, mods: {}, additional: [className, cls.loading] })}
    >
      <Loader />
    </div>
  }

  if (error) {
    return <div
      className={classNames({ cls: cls.ProfileCard, mods: {}, additional: [className, cls.loading] })}
    >
      <Text theme={TextTheme.ERROR} text={error} align={TextAlign.RIGHT} />
    </div>
  }

  return (<div
    className={classNames({ cls: cls.ProfileCard, mods: { [cls.editing]: readOnly }, additional: [className] })}
  >

    {data?.avatar && <div className={cls.avatarWrapper}>
      <Avatar src={data.avatar} />
    </div>}

    <div className={cls.data}>
      <Input
        onChange={onChangeAvatar}
        readonly={readOnly}
        className={cls.input}
        value={data?.avatar}
        placeholder='Аватар'
      />
      <Input
        onChange={onChangeFirstName}
        readonly={readOnly}
        className={cls.input}
        value={data?.firstname}
        placeholder='Ваше имя'
      />
      <Input
        onChange={onChangeLastName}
        readonly={readOnly}
        className={cls.input}
        value={data?.lastname}
        placeholder='Ваша фамилия'
      />
      <CountrySelect
        className={cls.input}
        readOnly={readOnly}
        value={data?.country}
        onChange={onChangeCountry}

      />
      <Input
        onChange={onChangeAge}
        readonly={readOnly}
        className={cls.input}
        value={data?.age}
        placeholder='Возраст'
      />
      <CurrencySelect
        className={cls.input}
        readOnly={readOnly}
        value={data?.currency}
        onChange={onChangeCurrency}
      />
    </div>

  </div>);
}
