import { Suspense, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './LoginModal.module.scss';
import Modal from 'shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader';

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export function LoginModal (props: PropsWithChildren<LoginModalProps>) {
  const { className, isOpen, onClose } = props;

  return (<Modal lazy onClose={onClose} isOpen={isOpen} className={classNames({ cls: cls.LoginModal, mods: {}, additional: [className] })}>
    <Suspense fallback={<Loader />}>
      {isOpen && <LoginFormAsync />}
    </Suspense>
  </Modal>);
}
