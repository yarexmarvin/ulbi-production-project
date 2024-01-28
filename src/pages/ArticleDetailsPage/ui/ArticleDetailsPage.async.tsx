import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error test
  setTimeout(() => { resolve(import('./ArticleDetailsPage')) }, 1500)
}))
