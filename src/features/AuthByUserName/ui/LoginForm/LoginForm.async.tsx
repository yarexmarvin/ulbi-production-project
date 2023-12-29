import { type LoginFormProps } from './LoginForm'
import { type FC, lazy } from 'react'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => { resolve(import('./LoginForm')) }, 1500)
}))
