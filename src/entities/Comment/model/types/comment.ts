import { type User } from 'entities/User/model/types/user';

export interface Comment {
  id: string
  text: string
  user: User
}
