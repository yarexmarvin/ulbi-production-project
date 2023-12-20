import { classNames } from 'shared/lib/classNames'

import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import Modal from 'shared/ui/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleAuthModal = useCallback(() => { setIsAuthModalOpen(prev => !prev) }, [])

  return <div className={classNames({ cls: cls.Navbar, additional: [className] })}>

    <Button onClick={toggleAuthModal} theme={ThemeButton.CLEAR_INVERTED} >
      {t('Войти')}
    </Button>

    <Modal isOpen={isAuthModalOpen} onClose={toggleAuthModal}>

    </Modal>
  </div>
}
