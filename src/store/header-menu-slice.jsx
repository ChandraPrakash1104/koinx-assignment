import { createSlice } from '@reduxjs/toolkit';

const headerMenuSlice = createSlice({
  name: 'headerMenu',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleHeaderMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleHeaderMenu } = headerMenuSlice.actions;

export default headerMenuSlice;
