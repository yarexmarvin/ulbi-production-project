import type { PropsWithChildren, SVGProps } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './Icon.module.scss';

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<SVGProps<SVGSVGElement>>
}

export function Icon (props: PropsWithChildren<IconProps>) {
  const { className, Svg } = props;

  return <Svg className={classNames({ cls: cls.Icon, mods: {}, additional: [className] })} />
}
