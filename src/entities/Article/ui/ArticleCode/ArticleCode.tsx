import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleCode.module.scss';
import { type ArticleBlockCode } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeProps {
  className?: string
  block: ArticleBlockCode
}

export function ArticleCode (props: PropsWithChildren<ArticleCodeProps>) {
  const { className, block } = props;

  return (
    <div
      className={classNames({
        cls: cls.ArticleCode,
        mods: {},
        additional: [className]
      })}
    >
      <Code text={block.code} />
    </div>
  );
}
