import { useDispatch } from 'react-redux';
import { type AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

// do not create these hooks in the same file with store (configureStore)
// Since these are actual variables, not types, it's important to define them in a separate file such as app/hooks.ts, not the store setup file. (official documentation)
