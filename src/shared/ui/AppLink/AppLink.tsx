import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import cls from './AppLink.module.scss'


export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string,
  to: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps & PropsWithChildren> = ({ className, children, theme = AppLinkTheme.PRIMARY, to, ...otherProps }) => {

  return <Link to={to} className={classNames({ cls: cls.AppLink, additional: [className, cls[theme]] })} {...otherProps}>
    {children}
  </Link>
}