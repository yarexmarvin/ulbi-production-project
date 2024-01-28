import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { type Article } from 'entities/Article/model/types/article'
import { type ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: null,
  error: null
}

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.fulfilled, (state, { payload }: PayloadAction<Article>) => {
        state.data = payload
        state.isLoading = false
      })
      .addCase(fetchArticleById.rejected, (state, { payload }) => {
        state.data = null
        state.error = payload
        state.isLoading = false
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.error = ''
        state.isLoading = true
      })
  }
})

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice
