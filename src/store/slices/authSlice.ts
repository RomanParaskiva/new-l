import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  user: string;
  authed: boolean;
};

const initialState = {
  user: "",
  authed: false,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<string>) {
      state.user = payload;
      state.authed = true;
    },
    logout(state) {
        state.user = "";
        state.authed = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
