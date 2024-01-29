import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleText.module.scss';
import { type ArticleBlockText } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text';

interface ArticleTextProps {
  className?: string
  block: ArticleBlockText
}

export function ArticleText (props: PropsWithChildren<ArticleTextProps>) {
  const { className, block } = props;

  console.log(block);

  return (
    <div
      className={classNames({
        cls: cls.ArticleText,
        mods: {},
        additional: [className]
      })}
    >
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((paragraph, index) => (
        <Text key={index} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
}
