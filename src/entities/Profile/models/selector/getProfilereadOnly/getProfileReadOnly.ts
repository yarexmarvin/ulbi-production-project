import { type StateScheme } from 'app/providers/StoreProvider';

export const getProfileReadOnly = (state: StateScheme) => state.profile?.readonly
