import { type StateScheme } from 'app/providers/StoreProvider';

export const getCounter = (state: Pick<StateScheme, 'counter'>) => state.counter
