import { type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { profileActions, updateProfileData } from 'entities/Profile';

interface ProfilePageHeaderProps {
  className?: string
  readOnly?: boolean
}

export function ProfilePageHeader (
  props: PropsWithChildren<ProfilePageHeaderProps>
) {
  const { className, readOnly } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const onEdit = () => {
    dispatch(profileActions.setReadOnly(false));
  };
  const onCancelEdit = () => {
    dispatch(profileActions.cancelEdit());
    dispatch(profileActions.setValidationErrors([]));
  };
  const onSave = () => {
    dispatch(updateProfileData());
  };

  return (
    <div
      className={classNames({
        cls: cls.ProfilePageHeader,
        mods: {},
        additional: [className]
      })}
    >
      <Text title={t('Профиль пользователя')} />
      {readOnly
        ? (
          <Button
            className={cls.editBtn}
            theme={ThemeButton.OUTLINE}
            onClick={onEdit}
        >
            {t('Редактировать')}
          </Button>
          )
        : (
          <>
            <Button
              className={cls.closeBtn}
              theme={ThemeButton.OUTLINE_RED}
              onClick={onCancelEdit}
          >
              {t('Отменить')}
            </Button>
            <Button
              className={cls.saveBtn}
              theme={ThemeButton.OUTLINE}
              onClick={onSave}
          >
              {t('Сохранить')}
            </Button>
          </>
          )}
    </div>
  );
}
