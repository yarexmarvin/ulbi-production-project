import { type StateScheme } from 'app/providers/StoreProvider';

export const getProfileForm = (state: StateScheme) => state.profile?.form
