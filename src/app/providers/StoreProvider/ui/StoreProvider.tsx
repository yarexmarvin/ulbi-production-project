import { createReduxStore, defaultState } from 'app/providers/StoreProvider/config/store';

import type { PropsWithChildren, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
  children: ReactNode
}

export function StoreProvider (props: PropsWithChildren<StoreProviderProps>) {
  const { children } = props

  const navigate = useNavigate()

  const store = createReduxStore(
    defaultState,
    navigate
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
