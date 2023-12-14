import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import { type SVGProps } from 'react'

type TSVGElementProps = React.FunctionComponent<SVGProps<SVGSVGElement>>

const icons: Record<string, TSVGElementProps> = {
  Main: MainIcon,
  About: AboutIcon

}

export const iconsHelper = (icon: string): TSVGElementProps => {
  return icons[icon]
}
