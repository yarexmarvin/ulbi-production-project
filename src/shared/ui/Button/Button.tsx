import { classNames } from 'shared/lib/classNames'
import cls from './Button.module.scss'

import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export function Button (props: PropsWithChildren<ButtonProps>) {
  const { className, children, theme = ThemeButton.CLEAR, ...otherProps } = props

  return (
    <button
      className={classNames({ cls: cls.Button, additional: [className, cls[theme]] })}
      {...otherProps}>
      {children}
    </button >
  )
}
