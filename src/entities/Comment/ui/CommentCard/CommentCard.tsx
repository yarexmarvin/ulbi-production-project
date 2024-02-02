import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './CommentCard.module.scss';
import { type Comment } from 'entities/Comment/model/types/comment';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = (props: PropsWithChildren<CommentCardProps>) => {
  const { className, comment, isLoading = false } = props;

  if (isLoading) {
    return (
      <div
        className={classNames({
          cls: cls.CommentCard,
          mods: {},
          additional: [className]
        })}
      >
        <div className={cls.user}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={cls.username} width="50%" height={16} />
        </div>
        <Skeleton className={cls.text} width="100%" height={100} />
      </div>
    );
  }

  return (
    <div
      className={classNames({
        cls: cls.CommentCard,
        mods: {},
        additional: [className]
      })}
    >
      <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
        <div className={cls.user}>
          <Avatar size={30} src={comment.user?.avatar} />
          <Text className={cls.username} text={comment.user.username} />
        </div>
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </div>
  );
};
