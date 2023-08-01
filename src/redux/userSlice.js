import { createSlice } from '@reduxjs/toolkit';

import {
  userLogIn,
  userLogOut,
  userRegister,
  userRefresh,
} from './operationsUser';

import {
  handlerPending,
  handlerRejected,
  handleFulfilled,
  handlerPendingLogOut,
  handleFulfilledLogOut,
  handleFulfilledRefreshing,
} from './userHelpers';

const userInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(userRegister.pending, handlerPending)
      .addCase(userRegister.fulfilled, handleFulfilled)
      .addCase(userRegister.rejected, handlerRejected)

      .addCase(userLogIn.pending, handlerPending)
      .addCase(userLogIn.fulfilled, handleFulfilled)
      .addCase(userLogIn.rejected, handlerRejected)

      .addCase(userLogOut.pending, handlerPendingLogOut)
      .addCase(userLogOut.fulfilled, handleFulfilledLogOut)
      .addCase(userLogOut.rejected, handlerRejected)

      .addCase(userRefresh.pending, handlerPending)
      .addCase(userRefresh.fulfilled, handleFulfilledRefreshing)
      .addCase(userRefresh.rejected, handlerRejected);
  },
});
export const userReduser = userSlice.reducer;
