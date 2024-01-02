import { classNames } from 'shared/lib/classNames'

import { memo, type PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = memo((props: PropsWithChildren<LangSwitcherProps>) => {
  const { className } = props

  const { t, i18n } = useTranslation()

  const toggleLanguage = async () => {
    try {
      await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    } catch (error) {
      console.warn('error in toggleLanguage', error)
    }
  }

  return (

    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames({ cls: '', additional: [className] })}
    >
      {t('Язык')}
    </Button>

  )
})
