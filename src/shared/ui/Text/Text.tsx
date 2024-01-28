import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}

export enum TextAlign {
  LEFT = 'left-align',
  RIGHT = 'right-align',
  CENTER = 'center-align'
}

interface TextProps {
  className?: string
  title?: string
  text?: string | number
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize

}

export function Text (props: PropsWithChildren<TextProps>) {
  const { className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.S } = props;

  return (
    <div className={classNames({ cls: cls.Text, mods: {}, additional: [className, cls[theme], cls[align], cls[size]] })}>
      {!!title && <p className={cls.title}>{title}</p>}
      {!!text && <p className={cls.text}> {text}</p>}
    </div>
  );
}
