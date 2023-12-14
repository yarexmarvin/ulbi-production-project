import { classNames } from 'shared/lib/classNames'
import cls from './Sidebar.module.scss'

import { useState, type PropsWithChildren } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
  className?: string
}

export function Sidebar (props: PropsWithChildren<SidebarProps>) {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation('sidebar')

  const toggleCollapsed = () => { setCollapsed(prev => !prev) }

  return (
    <div
      data-testid="sidebar"
      className={classNames({ cls: cls.Sidebar, mods: { [cls.collapsed]: collapsed }, additional: [className] })}
    >
      <div className={cls.links}>
        <AppLink icon="Main" onlyIcon={collapsed} theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.link}>{t('Главная страница')}</AppLink>
        <AppLink icon="About" onlyIcon={collapsed} theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.link}>{t('О нас')}</AppLink>
      </div>
      <Button data-testid="sidebar-toggle" className={cls.sidebarSwitcher} square size={ButtonSize.L} theme={ThemeButton.BACKGROUND_INVERTED} onClick={toggleCollapsed}>{collapsed ? '>' : '<'}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div >

  )
}
