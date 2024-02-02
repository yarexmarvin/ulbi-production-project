import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from 'features/AddCommentForm/model/types/addCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';

export const initialState: AddCommentFormSchema = {
  text: '',
  error: ''
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, { payload }: PayloadAction<string>) => {
      state.text = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCommentForArticle.fulfilled, (state) => {
        state.text = '';
        state.isLoading = false;
      })
      .addCase(addCommentForArticle.rejected, (state, { payload }) => {
        state.text = '';
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addCommentForArticle.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      });
  }
});
export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer
} = addCommentFormSlice;
