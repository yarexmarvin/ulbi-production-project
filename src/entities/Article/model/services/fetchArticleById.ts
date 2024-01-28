import { type ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Article } from 'entities/Article/model/types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleBydId',
  async (id, { rejectWithValue, extra }) => {
    try {
      const response = await extra?.api?.get<Article>('/articles/' + id)

      if (!response.data) throw new Error('error');

      return response.data;
    } catch (error: any) {
      console.warn('error in fetchProfileData', error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  })
