import { useEffect, type PropsWithChildren } from 'react';
import { useStore } from 'react-redux';
import { type Reducer, combineReducers } from '@reduxjs/toolkit';
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateScheme';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { reducers } from 'app/providers/StoreProvider/config/store';

export interface ReducerObject {
  reducer: Reducer
  removeAfterUnmount?: boolean
}

export type ReducersList = {
  [name in StateSchemaKey]?: ReducerObject;
};

export type ReducerListEntry = [StateSchemaKey, ReducerObject];

interface DynamicModuleLoaderProps {
  dynamicReducers: ReducersList
}

export function DynamicModuleLoader (
  props: PropsWithChildren<DynamicModuleLoaderProps>
) {
  const { dynamicReducers, children } = props;
  const store = useStore();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const allReducers: Record<StateSchemaKey | string, Reducer> = {
      ...reducers
    };

    const isReducerExist = (reducerName: StateSchemaKey) =>
      !!allReducers[reducerName];

    Object.entries(dynamicReducers).forEach(([key, value]) => {
      if (!isReducerExist(key as StateSchemaKey)) {
        allReducers[key] = value.reducer;
        store.replaceReducer(combineReducers(allReducers));

        dispatch({ type: `@DYNAMIC REDUCER: Reducer ${key} has been added` });
      }
    }, []);

    return () => {
      Object.entries(dynamicReducers).forEach(([key, value]) => {
        if (value.removeAfterUnmount && isReducerExist(key as StateSchemaKey)) {
          delete allReducers[key];

          store.replaceReducer(combineReducers(allReducers));

          dispatch({
            type: `@DYNAMIC REDUCER: Reducer ${key} has been removed`
          });
        }
      });
    };

    // eslint-disable-next-line
  }, [store, dispatch]);

  return <div>{children}</div>;
}
