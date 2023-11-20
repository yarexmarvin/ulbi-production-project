import { classNames } from "shared/lib/classNames"

import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {


  return <div className={classNames({ cls: cls.Navbar, additional: [className] })}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>main page</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>abput page</AppLink>
    </div>
  </div>

}



