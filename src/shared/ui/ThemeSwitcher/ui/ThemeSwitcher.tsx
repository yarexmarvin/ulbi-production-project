import type { PropsWithChildren } from 'react'

import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export function ThemeSwitcher (props: PropsWithChildren<ThemeSwitcherProps>) {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button className={classNames({ cls: '', additional: [className] })} onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
		>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>

  )
}
