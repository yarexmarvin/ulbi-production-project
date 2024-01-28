import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleImage.module.scss';
import { type ArticleBlockImage } from 'entities/Article/model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageProps {
  className?: string
  block: ArticleBlockImage
}

export function ArticleImage (props: PropsWithChildren<ArticleImageProps>) {
  const { className, block } = props;

  return (
    <div
      className={classNames({
        cls: cls.ArticleImage,
        additional: [className],
        mods: {}
      })}
    >
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
}
