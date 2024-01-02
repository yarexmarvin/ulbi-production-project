import { lazy } from 'react'

export const ProfilePageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error test
  setTimeout(() => { resolve(import('./ProfilePage')) }, 1500)
}))
