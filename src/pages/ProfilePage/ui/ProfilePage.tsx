import { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ProfilePage.module.scss';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileCard,
  fetchProfileData,
  profileActions,
  profileReducer
} from 'entities/Profile';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { useSelector } from 'react-redux';
import { getProfileIsLoading } from 'entities/Profile/models/selector/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/models/selector/getProfileError/getProfileError';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { getProfileReadOnly } from 'entities/Profile/models/selector/getProfilereadOnly/getProfileReadOnly';
import { getProfileForm } from 'entities/Profile/models/selector/getProfileForm/getProfileForm';
import { type CURRENCY } from 'entities/Currency';
import { type COUNTRY } from 'entities/Country';
import { getProfileValidationErrors } from 'entities/Profile/models/selector/getProfileValidationErrors/getProfileValidationErrors';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { ValidationErrors } from 'entities/Profile/models/types/profile';

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  const validationErrorsMapping: Record<ValidationErrors, string> = {
    [ValidationErrors.INCORRECTED_NAME]: t('Неверное имя'),
    [ValidationErrors.INCORRECTED_AGE]: t('Неверный возраст'),
    [ValidationErrors.NO_DATA]: t('Нет данных')
  };
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadOnly);
  const validationErrors = useSelector(getProfileValidationErrors);

  const getProfileInfo = useCallback(async () => {
    try {
      await dispatch(fetchProfileData());
    } catch (error) {
      console.warn('error in getProfileData', error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      getProfileInfo();
    }
  }, [getProfileInfo]);

  const dynamicReducers: ReducersList = {
    profile: { reducer: profileReducer, removeAfterUnmount: true }
  };

  const onChangeFirstName = (value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value }));
  };
  const onChangeLastName = (value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  };

  const onChangeAge = (value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  };

  const onChangeAvatar = (value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  };

  const onChangeCurrency = (currency?: CURRENCY) => {
    dispatch(profileActions.updateProfile({ currency }));
  };

  const onChangeCountry = (country?: COUNTRY) => {
    dispatch(profileActions.updateProfile({ country }));
  };

  return (
    <DynamicModuleLoader dynamicReducers={dynamicReducers}>
      <div
        className={classNames({
          cls: cls.ProfilePage,
          mods: {},
          additional: []
        })}
      >
        <ProfilePageHeader readOnly={readOnly} />
        {!!validationErrors?.length && (
          <div>
            {validationErrors.map((error) => (
              <Text
                key={error}
                theme={TextTheme.ERROR}
                text={validationErrorsMapping[error]}
              />
            ))}
          </div>
        )}
        <ProfileCard
          data={data}
          isLoading={isLoading}
          error={error}
          readOnly={readOnly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeCountry={onChangeCountry}
          onChangeAge={onChangeAge}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
