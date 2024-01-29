import { classNames } from 'shared/lib/classNames';

import cls from './Navbar.module.scss';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const toggleAuthModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  const handleLogout = () => {
    dispatch(userActions.logOut());
  };

  if (authData) {
    return (
      <div className={classNames({ cls: cls.Navbar, additional: [className] })}>
        <Button onClick={handleLogout} theme={ThemeButton.CLEAR_INVERTED}>
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames({ cls: cls.Navbar, additional: [className] })}>
      <Button onClick={toggleAuthModal} theme={ThemeButton.CLEAR_INVERTED}>
        {t('Войти')}
      </Button>

      <LoginModal isOpen={isAuthModalOpen} onClose={toggleAuthModal} />
    </div>
  );
});
