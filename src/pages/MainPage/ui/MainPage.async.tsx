import { lazy } from 'react'

export const MainPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error test
  setTimeout(() => { resolve(import('./MainPage')) }, 1500)
}))
