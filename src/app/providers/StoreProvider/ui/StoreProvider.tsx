import { store } from 'app/providers/StoreProvider/config/store';
import { type StateScheme } from '../config/StateScheme';

import type { PropsWithChildren, ReactNode } from 'react';
import { Provider } from 'react-redux';

interface StoreProviderProps {
  children: ReactNode
}

export function StoreProvider (props: PropsWithChildren<StoreProviderProps>) {
  const { children } = props

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
