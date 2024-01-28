import { type StateScheme } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from './articleDetailsSelectors';

describe('getArticleDetailsData', () => {
  it('should return article details data', () => {
    const state: Pick<StateScheme, 'articleDetails'> = {
      articleDetails: {
        isLoading: true,
        error: '',
        data: null
      }
    };

    expect(getArticleDetailsData(state as StateScheme)).toBeNull();
  });
  it('should return article details isLoading', () => {
    const state: Pick<StateScheme, 'articleDetails'> = {
      articleDetails: {
        isLoading: true,
        error: '',
        data: null
      }
    };

    expect(getArticleDetailsIsLoading(state as StateScheme)).toBeTruthy();
  });
  it('should return article details error', () => {
    const state: Pick<StateScheme, 'articleDetails'> = {
      articleDetails: {
        isLoading: true,
        error: 'error',
        data: null
      }
    };

    expect(getArticleDetailsError(state as StateScheme)).toStrictEqual('error');
  });
});
