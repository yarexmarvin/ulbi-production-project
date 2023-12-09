import { classNames } from 'shared/lib/classNames'
import cls from './Sidebar.module.scss'

import { useState, type PropsWithChildren } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher'
import { useTranslation } from 'react-i18next'

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
      <button data-testid="sidebar-toggle" onClick={toggleCollapsed}>{collapsed ? t('Раскрыть') : t('Скрыть')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div >

  )
}
