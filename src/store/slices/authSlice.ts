import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  authed: false,
};

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
