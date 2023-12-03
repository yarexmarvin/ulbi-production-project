import cls from './NotFoundPage.module.scss'

import type { PropsWithChildren } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}

export function NotFoundPage (props: PropsWithChildren<NotFoundPageProps>) {
  const { className } = props

  const { t } = useTranslation('notFound')

  return (
    <div className={classNames({ cls: cls.NotFoundPage, additional: [className] })}>
      {t('Страница не найдена')}
    </div>
  )
}
