import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'
import { type SVGProps } from 'react'

type TSVGElementProps = React.FunctionComponent<SVGProps<SVGSVGElement>>

const icons: Record<string, TSVGElementProps> = {
  Main: MainIcon,
  About: AboutIcon,
  Profile: ProfileIcon,
  Article: ArticleIcon
}

export const iconsHelper = (icon: string): TSVGElementProps => {
  return icons[icon]
}
