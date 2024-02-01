import {
  type PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import { type StateScheme } from 'app/providers/StoreProvider';

import { type Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage/model/types/articleDetailsCommentsSchema';
// Since we don't provide `selectId`, it defaults to assuming `entity.id` is the right field
const commentsAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors(
  (state: StateScheme) =>
    state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    error: '',
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, { payload }: PayloadAction<Comment[]>) => {
          commentsAdapter.setAll(state, payload);
          state.isLoading = false;
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
        commentsAdapter.setAll(state, null);
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      });
  }
});

export const {
  actions: articleDetailsCommentsActions,
  reducer: articleDetailsCommentsReducer
} = articleDetailsCommentsSlice;
