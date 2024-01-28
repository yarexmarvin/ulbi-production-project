import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string
}

export default function ArticleDetailsPage (
  props: PropsWithChildren<ArticleDetailsPageProps>
) {
  const { className } = props;

  const { t } = useTranslation('articleDetails');

  const { id } = useParams();

  if (!id) {
    return (
      <div
        className={classNames({
          cls: cls.ArticleDetailsPage,
          mods: {},
          additional: [className]
        })}
      >
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div
      className={classNames({
        cls: cls.ArticleDetailsPage,
        mods: {},
        additional: []
      })}
    >
      <ArticleDetails id={id} />
    </div>
  );
}
