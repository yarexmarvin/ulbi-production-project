import { type ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetailsSelectors';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
Comment,
string,
ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, { getState, dispatch, rejectWithValue, extra }) => {
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    console.log(text);
    console.log(userData);
    console.log(article);

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra?.api?.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      });

      await dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (error: any) {
      console.warn('error in sendComment', error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
