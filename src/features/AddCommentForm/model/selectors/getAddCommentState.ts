import { type StateScheme } from 'app/providers/StoreProvider';

export const getAddCommentText = (state: StateScheme) =>
  state.addCommentForm?.text;
export const getAddCommentIsLoading = (state: StateScheme) =>
  state.addCommentForm?.isLoading;
export const getAddCommentError = (state: StateScheme) =>
  state.addCommentForm?.error;
