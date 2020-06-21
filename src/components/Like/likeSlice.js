import { createSlice } from '@reduxjs/toolkit';

export const likeSlice = createSlice({
  name: 'like',
  initialState: {
    value: null,
  },
  reducers: {
    like: state => {
      state.value = state.value === 'like' ? null : 'like';
    },
    dislike: state => {
      state.value = state.value === 'dislike' ? null : 'dislike';
    },
  },
});

export const { like, dislike } = likeSlice.actions;

export const selectLike = state => state.counter.value;

export default likeSlice.reducer;
