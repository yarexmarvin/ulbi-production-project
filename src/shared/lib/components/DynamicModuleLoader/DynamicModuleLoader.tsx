import { type Reducer, combineReducers } from '@reduxjs/toolkit';
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateScheme';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { reducers } from 'app/providers/StoreProvider/config/store';
import { useEffect, type PropsWithChildren } from 'react';
import { useStore } from 'react-redux';

export interface ReducerObject {
  reducer: Reducer
  removeAfterUnmount?: boolean
}

export type ReducersList = {
  [name in StateSchemaKey]?: ReducerObject
}

export type ReducerListEntry = [StateSchemaKey, ReducerObject]

interface DynamicModuleLoaderProps {

  dynamicReducers: ReducersList

}

export function DynamicModuleLoader (props: PropsWithChildren<DynamicModuleLoaderProps>) {
  const { dynamicReducers, children } = props
  const store = useStore()
  const dispatch = useAppDispatch();

  useEffect(() => {
    const allReducers: Record<StateSchemaKey | string, Reducer> = { ...reducers }

    const isReducerExist = (reducerName: StateSchemaKey) => !!allReducers[reducerName]

    Object.entries(dynamicReducers).forEach(([key, value]: ReducerListEntry) => {
      if (!isReducerExist(key)) {
        allReducers[key] = value.reducer
        store.replaceReducer(combineReducers(allReducers))

        dispatch({ type: `@DYNAMIC REDUCER: Reducer ${key} has been added` })
      }
    })

    return () => {
      Object.entries(dynamicReducers).forEach(([key, value]: ReducerListEntry) => {
        if (value.removeAfterUnmount && isReducerExist(key)) {
          delete allReducers[key]

          store.replaceReducer(combineReducers(allReducers))

          dispatch({ type: `@DYNAMIC REDUCER: Reducer ${key} has been removed` })
        }
      })
    }
  }, [store, dispatch, dynamicReducers])

  return (<div >
    {children}
  </div>);
}
