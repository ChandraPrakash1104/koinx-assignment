import { createSlice } from '@reduxjs/toolkit';

const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    id: '',
    data: {},
  },
  reducers: {
    setCoinData: (state, action) => {
      state.data = action.payload.data;
      state.id = action.payload.id;
    },
  },
});

export const coinActions = coinSlice.actions;

export default coinSlice;
