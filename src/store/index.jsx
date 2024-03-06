import { configureStore } from '@reduxjs/toolkit';

import coinSlice from './coin-slice';
import headerMenuSlice from './header-menu-slice';

const store = configureStore({
  reducer: { coin: coinSlice.reducer, menu: headerMenuSlice.reducer },
});

export default store;
