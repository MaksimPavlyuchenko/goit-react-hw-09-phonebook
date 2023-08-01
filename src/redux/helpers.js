export const handlerFetchFulfilled = (state, { payload }) => {
  state.items = payload;
};

export const handlerAddFullfilled = (state, { payload }) => {
  state.items.push(payload);
};

export const handlerDeleteFullfilled = (state, { payload }) => {
  state.items = state.items.filter(item => {
    return item.id !== payload.id;
  });
};

export const handlerFullfilled = state => {
  state.error = null;
};

export const handlerPending = state => state;

export const handlerRejected = (state, { payload }) => {
  state.error = payload;
};
