import { createSelector } from 'reselect';
import { type StateScheme } from 'app/providers/StoreProvider';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(getCounter, counter => counter.value)
