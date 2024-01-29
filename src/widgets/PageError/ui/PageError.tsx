import { classNames } from 'shared/lib/classNames';
import cls from './PageError.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface PageErrorProps {
  className?: string
}

export function PageError (props: PropsWithChildren<PageErrorProps>) {
  const { className } = props;

  const { t } = useTranslation('pageError');

  const realoadPage = () => {
    location.reload();
  };

  return (
    <div
      className={classNames({ cls: cls.PageError, additional: [className] })}
    >
      <div>
        <p>{t('Произошла непредвиденная ошибка')}</p>
        <Button onClick={realoadPage}>{t('Обновить страницу')}</Button>
      </div>
    </div>
  );
}
