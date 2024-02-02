import { lazy } from 'react';

export const AddCommentFormAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error test
        resolve(import('./AddCommentForm'));
      }, 1500);
    })
);
