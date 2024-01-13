import { type Profile, type ProfileSchema } from './models/types/profile'
import { profileActions, profileReducer } from './models/slice/profileSlice'
import { fetchProfileData } from './models/service/fetchProfileData/fetchProfileData'
import { updateProfileData } from './models/service/updateProfileData/updateProfileData'
import { ProfileCard } from './ui/ProfileCard//ProfileCard'

export {
  type Profile,
  type ProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  updateProfileData,
  ProfileCard
}
