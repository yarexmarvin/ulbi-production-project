import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './LoginModal.module.scss';
import Modal from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export function LoginModal (props: PropsWithChildren<LoginModalProps>) {
  const { className, isOpen, onClose } = props;

  return (<Modal lazy onClose={onClose} isOpen={isOpen} className={classNames({ cls: cls.LoginModal, mods: {}, additional: [className] })}>
    <LoginForm />
  </Modal>);
}
