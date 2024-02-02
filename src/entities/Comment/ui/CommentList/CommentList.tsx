import { type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './CommentList.module.scss';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { type Comment } from 'entities/Comment/model/types/comment';
import { Text } from 'shared/ui/Text';

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = (props: PropsWithChildren<CommentListProps>) => {
  const { className, comments = [], isLoading = false } = props;

  return (
    <div
      className={classNames({
        cls: cls.CommentList,
        mods: {},
        additional: [className]
      })}
    >
      {comments.length
        ? (
            comments.map((comment: Comment, index: number) => (
              <CommentCard
                className={cls.comment}
                key={index}
                comment={comment}
                isLoading={isLoading}
          />
            ))
          )
        : (
          <Text text="Комментарии отсутствуют" />
          )}
    </div>
  );
};
