import { StoreProvider } from './ui/StoreProvider';
import { defaultState, createReduxStore } from './config/store';
import { type StateScheme, type ReduxStoreWithManager, type ThunkExtraArgs, type ThunkConfig } from './config/StateScheme'

export {
  StoreProvider,
  defaultState,
  type StateScheme,
  type ThunkExtraArgs,
  type ThunkConfig,
  createReduxStore,
  type ReduxStoreWithManager
}
