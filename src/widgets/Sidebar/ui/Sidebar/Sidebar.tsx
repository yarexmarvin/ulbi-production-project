import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss';

import { useState, type PropsWithChildren } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => setCollapsed(prev => !prev);

  return (
    <div
      className={classNames({ cls: cls.Sidebar, mods: { [cls.collapsed]: collapsed }, additional: [className] })}>

      <button onClick={toggleCollapsed}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>

  );
}