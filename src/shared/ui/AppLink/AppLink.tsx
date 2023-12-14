import { type SVGProps, type FC, type PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import cls from './AppLink.module.scss'
import { iconsHelper } from 'shared/lib/icons/iconsHelper'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  to: string
  theme?: AppLinkTheme
  icon?: string
  onlyIcon?: boolean
}

export const AppLink: FC<AppLinkProps & PropsWithChildren> = ({ className, children, theme = AppLinkTheme.PRIMARY, to, icon, onlyIcon, ...otherProps }) => {
  const IconComponent: React.FunctionComponent<SVGProps<SVGSVGElement>> = iconsHelper(icon)

  return <Link to={to} className={classNames({ cls: cls.AppLink, additional: [className, cls[theme]] })} {...otherProps}>

    {!!icon && <div className={classNames({ cls: cls.icons, mods: { [cls.iconsCenter]: onlyIcon } })}>
      {<IconComponent className={cls.icon} />}
    </div>
    }
    <div className={cls.text}>

      {!onlyIcon && children}
    </div>

  </Link >
}
