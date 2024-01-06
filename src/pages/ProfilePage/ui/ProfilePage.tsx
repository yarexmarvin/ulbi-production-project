import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './ProfilePage.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';

const ProfilePage = () => {
  const dispatch = useAppDispatch()

  const getProfileData = async () => {
    try {
      await dispatch(fetchProfileData())
    } catch (error) {
      console.warn('error in getProfileData', error)
    }
  }

  useEffect(() => {
    getProfileData()
  }, [])

  const dynamicReducers: ReducersList = {
    profile: { reducer: profileReducer, removeAfterUnmount: true }
  }

  return <DynamicModuleLoader dynamicReducers={dynamicReducers}>

    <div className={classNames({ cls: cls.ProfilePage, mods: {}, additional: [] })}>
      <ProfileCard />
    </div>
  </DynamicModuleLoader>
}

export default ProfilePage
