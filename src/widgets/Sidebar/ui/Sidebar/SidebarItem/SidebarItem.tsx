import { memo, type PropsWithChildren } from 'react';

import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { type SidebarItemType } from 'widgets/Sidebar/models/SidebarItem';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
  item?: SidebarItemType
  onlyIcon: boolean
}

export const SidebarItem = memo((props: PropsWithChildren<SidebarItemProps>) => {
  const { item, onlyIcon } = props;

  const { t } = useTranslation('sidebar')

  return (<AppLink
    icon={item.icon}
    onlyIcon={onlyIcon}
    theme={AppLinkTheme.SECONDARY}
    to={item.path}
    className={cls.link}>
    {t(item.text)}
  </AppLink>);
})
