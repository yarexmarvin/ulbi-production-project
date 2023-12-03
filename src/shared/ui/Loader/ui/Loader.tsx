import './Loader.scss'

import type { PropsWithChildren } from 'react'
import { classNames } from 'shared/lib/classNames'

interface LoaderProps {
  className?: string
}

export function Loader (props: PropsWithChildren<LoaderProps>) {
  const { className } = props

  return (
    <div className={classNames({ cls: 'lds-ring', additional: [className] })}><div></div><div></div><div></div><div></div></div>
  )
}
