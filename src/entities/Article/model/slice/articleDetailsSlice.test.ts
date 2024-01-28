import { fetchArticleById } from '../services/fetchArticleById'

import { type Action } from '@reduxjs/toolkit'

import { type Article, ArticleBlockType, ArticleType } from '../types/article'
import { articleDetailsReducer } from './articleDetailsSlice'
import { type ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema'

const articleDetails: Article = {
  id: '1',
  title: '3',
  subtitle: 'd',
  img: 'asd',
  views: 123,
  createdAt: 'asdasd',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '123',
      type: ArticleBlockType.TEXT,
      title: 'title',
      paragraphs: ['asd']
    }
  ]
}

const initialState: ArticleDetailsSchema = {
  data: articleDetails,

  isLoading: false,

  error: ''
}

describe('profileSlice', () => {
  it('should set errors to empty string and isLoading to true when pending', () => {
    const state: ArticleDetailsSchema = initialState

    expect(state.isLoading).toBeFalsy()
    const result = articleDetailsReducer(
      state,
      fetchArticleById.pending as Action
    )

    expect(result.isLoading).toBeTruthy()
  })
  it('should set profileData when fulfilled fetching', () => {
    const state: ArticleDetailsSchema = {
      ...initialState,
      data: null,
      isLoading: true
    }

    const result = articleDetailsReducer(
      state,
      fetchArticleById.fulfilled(articleDetails, '1', '') as Action
    )

    expect(result.data).toEqual(articleDetails)
    expect(result.isLoading).toBeFalsy()
  })
  it('should set error when rejected fetching', () => {
    const state: ArticleDetailsSchema = {
      ...initialState,
      data: null,
      isLoading: true
    }

    const errorLabel = 'server error'

    const action = {
      type: fetchArticleById.rejected.type,
      payload: errorLabel
    }

    const result = articleDetailsReducer(state, action)

    expect(result.error).toEqual(errorLabel)
    expect(result.isLoading).toBeFalsy()
  })
})
