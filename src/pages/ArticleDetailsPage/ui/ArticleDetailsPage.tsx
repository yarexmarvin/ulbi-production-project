import { useCallback, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useInitialEffect } from 'shared/hook/useInitialEffect';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';

// nested DynamicModuleLoader does not work
const dynamicReducers: ReducersList = {
  articleDetailsComments: {
    reducer: articleDetailsCommentsReducer,
    removeAfterUnmount: true
  },
  articleDetails: { reducer: articleDetailsReducer, removeAfterUnmount: true },
  addCommentForm: { reducer: addCommentFormReducer, removeAfterUnmount: true }
};
interface ArticleDetailsPageProps {
  className?: string
}

export default function ArticleDetailsPage (
  props: PropsWithChildren<ArticleDetailsPageProps>
) {
  const { className } = props;

  const { t } = useTranslation('articleDetails');

  const dispatch = useAppDispatch();

  const { id } = useParams();

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  const comments = useSelector(getArticleComments.selectAll);
  const isLoadingComments = useSelector(getArticleDetailsCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

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
    <DynamicModuleLoader dynamicReducers={dynamicReducers}>
      <div
        className={classNames({
          cls: cls.ArticleDetailsPage,
          mods: {},
          additional: []
        })}
      >
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title="Комментарии" />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoadingComments} />
      </div>
    </DynamicModuleLoader>
  );
}
