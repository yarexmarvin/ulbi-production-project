import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss';

import { useState, type PropsWithChildren, memo } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';

import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button';

import { SidebarItems } from 'widgets/Sidebar/models/SidebarItem';
import { SidebarItem } from 'widgets/Sidebar/ui/Sidebar/SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: PropsWithChildren<SidebarProps>) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames({
        cls: cls.Sidebar,
        mods: { [cls.collapsed]: collapsed },
        additional: [className]
      })}
    >
      <div className={cls.links}>
        {SidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} onlyIcon={collapsed} />
        ))}
      </div>
      <Button
        data-testid="sidebar-toggle"
        className={cls.sidebarSwitcher}
        square
        size={ButtonSize.L}
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={toggleCollapsed}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
});
