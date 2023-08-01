export const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

export const handlerPending = state => state;

export const handlerRejected = (state, action) => {
  state.error = action.payload;
};

export const handlerPendingLogOut = state => {
  state.isLoggedIn = false;
};
export const handleFulfilledLogOut = (state, action) => {
  state.user = action.payload;
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = null;
};

export const handleFulfilledRefreshing = (state, action) => {
  state.user = action.payload;
  state.isRefreshing = false;
  state.isLoggedIn = true;
};
