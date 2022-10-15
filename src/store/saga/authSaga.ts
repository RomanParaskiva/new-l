import { takeEvery, all, select } from "redux-saga/effects";
import { RootState } from "../store";
import { logout, login } from "../slices/authSlice";


export function* authSaga() {
  yield all([authLogoutWatcher(), authLoginWather()]);
}

function* authLogoutWatcher() {
  yield takeEvery(logout.type, authLogoutWorker);
}

function* authLogoutWorker() {
  yield localStorage.removeItem("userName");
}

function* authLoginWather() {
  yield takeEvery(login.type, authLoginWorker);
}

function* authLoginWorker() {
  const state: RootState = yield select();
  yield localStorage.setItem("userName", state.auth.user);
}