import { type COUNTRY } from 'entities/Country';
import { type CURRENCY } from 'entities/Currency';

export interface Profile {
  firstname: string
  lastname: string
  age: number
  currency: CURRENCY
  country: COUNTRY
  username: string
  avatar: string
  id: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidationErrors[]
}

export enum ValidationErrors {
  NO_DATA = 'NO_DATA',
  INCORRECTED_NAME = 'INCORRECTED_NAME',
  INCORRECTED_AGE = 'INCORRECTED_AGE'
}
