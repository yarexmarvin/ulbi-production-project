import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './ProfilePage.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
  className?: string
}

export default function ProfilePage (props: PropsWithChildren<ProfilePageProps>) {
  const { t } = useTranslation()

  const dynamicReducers: ReducersList = {
    profile: { reducer: profileReducer, removeAfterUnmount: true }
  }

  return <DynamicModuleLoader dynamicReducers={dynamicReducers}>

    <div className={classNames({ cls: cls.ProfilePage, mods: {}, additional: [] })}>
      {t('Profile page')}
    </div>
  </DynamicModuleLoader>
}
