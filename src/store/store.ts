import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const getPreloadedState = () => {
  let state;

  try {
    const value = localStorage.getItem("userName");
    state = value ? { auth: { authed: true, user: JSON.parse(value) } } : { auth: { authed: false, user: "" } };
  } catch (e) {}

  return state;
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  preloadedState: getPreloadedState(),
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
