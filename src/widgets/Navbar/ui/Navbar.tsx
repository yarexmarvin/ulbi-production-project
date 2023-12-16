import { classNames } from 'shared/lib/classNames'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return <div className={classNames({ cls: cls.Navbar, additional: [className] })}>

  </div>
}
