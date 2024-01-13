import { type StateScheme } from 'app/providers/StoreProvider';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';

import type { PropsWithChildren, ReactNode } from 'react';
import { Provider } from 'react-redux';

interface StoreProviderProps {
  children: ReactNode
  initialState?: StateScheme
}

export function StoreProviderTest (props: PropsWithChildren<StoreProviderProps>) {
  const { children, initialState } = props

  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
