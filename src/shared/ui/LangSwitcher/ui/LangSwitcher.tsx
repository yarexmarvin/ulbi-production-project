import { classNames } from 'shared/lib/classNames';
import cls from './LangSwitcher.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher(props: PropsWithChildren<LangSwitcherProps>) {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (


    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      className={classNames({ cls: cls.LangSwitcher, additional: [className] })}
    >
      {t('Язык')}
    </Button>

  );
}