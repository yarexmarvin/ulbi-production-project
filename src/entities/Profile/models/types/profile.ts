import { type CURRENCY } from 'shared/const/common'

export interface Profile {
  firstname: string
  lastname: string
  age: number
  currency: CURRENCY
  country: string
  username: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
