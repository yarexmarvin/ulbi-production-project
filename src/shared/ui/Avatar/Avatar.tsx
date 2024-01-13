import { useMemo, type PropsWithChildren, type CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export function Avatar (props: PropsWithChildren<AvatarProps>) {
  const { className, src, alt, size = 100 } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size
  }), [size])

  return <img
    alt={alt}
    style={styles}
    src={src}
    className={classNames({ cls: cls.Avatar, mods: {}, additional: [className] })}
  />;
}
