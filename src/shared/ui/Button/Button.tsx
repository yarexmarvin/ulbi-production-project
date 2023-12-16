import { classNames } from 'shared/lib/classNames'
import cls from './Button.module.scss'

import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
}

export function Button (props: PropsWithChildren<ButtonProps>) {
  const { className, children, theme, size, square, ...otherProps } = props

  return (
    <button
      className={classNames({ cls: cls.Button, mods: { [cls.square]: square, [cls[size]]: size }, additional: [className, cls[theme], cls[size]] })}
      {...otherProps}>
      {children}
    </button >
  )
}
