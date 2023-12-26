import { type createReduxStore } from 'app/providers/StoreProvider/config/store';
import { useDispatch } from 'react-redux';

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();

// do not create these hooks in the same file with store (configureStore)
// Since these are actual variables, not types, it's important to define them in a separate file such as app/hooks.ts, not the store setup file. (official documentation)
