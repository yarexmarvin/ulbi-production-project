import type { CSSProperties, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames'
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export function Skeleton (props: PropsWithChildren<SkeletonProps>) {
  const { className, height, width, border } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border
  }

  return (
    <div
      className={classNames({ cls: cls.Skeleton, mods: {}, additional: [className] })}
      style={styles}
    >

    </div>
  );
}
