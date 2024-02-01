import { type ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
Comment[],
string | undefined,
ThunkConfig<string>
>(
  'articleDetailsComments/fetchCommentsByArticleId',
  async (id, { rejectWithValue, extra }) => {
    try {
      const response = await extra?.api?.get<Comment[]>(
        `/article/${id}/comments`,
        { params: { _expand: 'user' } }
      );
      if (!response.data) throw new Error('error');

      return response.data;
    } catch (error: any) {
      console.warn('error in fetchProfileData', error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
