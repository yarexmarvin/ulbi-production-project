import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: string
  text: string
  icon: string
}

export const SidebarItems: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная страница',
    icon: 'Main'
  },
  {
    path: RoutePath.about,
    text: 'О нас',
    icon: 'About'

  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    icon: 'Profile'

  }
]
