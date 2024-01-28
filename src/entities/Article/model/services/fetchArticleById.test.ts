import {
  type Article,
  ArticleBlockType,
  ArticleType
} from './../types/article'
import { fetchArticleById } from './fetchArticleById'

/* eslint-disable @typescript-eslint/unbound-method */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data: Article = {
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

describe('fetchArticleById', () => {
  it('should successfully fetch article data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toStrictEqual('fulfilled')
    expect(result.payload).toEqual(data)
  })

  it('should reject fetching article data', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockRejectedValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('2')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toStrictEqual('rejected')
    expect(result.payload).toBeUndefined()
  })
})
