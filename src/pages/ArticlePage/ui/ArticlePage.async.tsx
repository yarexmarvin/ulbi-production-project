import { lazy } from 'react'

export const ArticlePageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error test
  setTimeout(() => { resolve(import('./ArticlePage')) }, 1500)
}))
