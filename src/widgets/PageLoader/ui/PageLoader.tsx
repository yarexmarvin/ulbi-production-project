import { classNames } from 'shared/lib/classNames'
import cls from './PageLoader.module.scss'

import type { PropsWithChildren } from 'react'
import { Loader } from 'shared/ui/Loader'

interface PageLoaderProps {
  className?: string
}

export function PageLoader (props: PropsWithChildren<PageLoaderProps>) {
  const { className } = props

  return (
    <div className={classNames({ cls: cls.PageLoader, additional: [className] })}>
      <Loader />
    </div>
  )
}
