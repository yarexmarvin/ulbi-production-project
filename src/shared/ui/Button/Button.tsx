import { classNames } from 'shared/lib/classNames'
import cls from './Button.module.scss'

import { memo, type ButtonHTMLAttributes, type PropsWithChildren } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
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
  disabled?: boolean
}

export const Button = memo((props: PropsWithChildren<ButtonProps>) => {
  const { className, children, theme, size, square, disabled, ...otherProps } = props

  return (
    <button
      disabled={disabled}
      className={classNames({ cls: cls.Button, mods: { [cls.disabled]: disabled, [cls.square]: square, [cls[size]]: size }, additional: [className, cls[theme], cls[size]] })}
      {...otherProps}>
      {children}
    </button >
  )
})
