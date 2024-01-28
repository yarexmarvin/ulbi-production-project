import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
  className?: string
}

export default function ArticlePage (
  props: PropsWithChildren<ArticlePageProps>
) {
  const { className } = props;

  return (
    <div
      className={classNames({
        cls: cls.ArticlePage,
        mods: {},
        additional: [className]
      })}
    ></div>
  );
}
