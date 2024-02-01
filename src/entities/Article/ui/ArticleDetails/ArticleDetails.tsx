import { useCallback, useEffect, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleDetails.module.scss';

import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from 'entities/Article/model/selectors/articleDetailsSelectors';
import { Text, TextSize, TextTheme } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon';
import {
  type ArticleBlock,
  ArticleBlockType
} from 'entities/Article/model/types/article';
import { ArticleCode } from 'entities/Article/ui/ArticleCode/ArticleCode';
import { ArticleImage } from 'entities/Article/ui/ArticleImage/ArticleImage';
import { ArticleText } from 'entities/Article/ui/ArticleText/ArticleText';

interface ArticleDetailsProps {
  className?: string
  id: string
}

export const ArticleDetails = (
  props: PropsWithChildren<ArticleDetailsProps>
) => {
  const { className, id } = props;

  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const data = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCode key={block.id} className={cls.block} block={block} />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImage key={block.id} className={cls.block} block={block} />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleText key={block.id} className={cls.block} block={block} />
        );
      default:
        return null;
    }
  }, []);

  const getContent = () => {
    if (isLoading) {
      return (
        <div className={cls.skeletonWrapper}>
          <Skeleton
            width={100}
            height={100}
            border="50%"
            className={cls.avatar}
          />
          <Skeleton width="100%" height={100} className={cls.title} />
          <Skeleton width="100%" height={200} className={cls.text} />
          <Skeleton width="100%" height={300} className={cls.text} />
        </div>
      );
    }

    if (error) {
      return <Text theme={TextTheme.ERROR} text={error} />;
    }

    if (!data) {
      return <Text text="Loading..." />;
    }

    return (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={100} src={data?.img} className={cls.avatar} />
        </div>
        <Text size={TextSize.L} title={data?.title} text={data?.subtitle} />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text className={cls.articleInfoText} text={data?.views} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text className={cls.articleInfoText} text={data?.createdAt} />
        </div>
        {data?.blocks.map(renderBlock)}
      </>
    );
  };

  return (
    <div
      className={classNames({
        cls: cls.ArticleDetails,
        mods: {},
        additional: [className]
      })}
    >
      {getContent()}
    </div>
  );
};
