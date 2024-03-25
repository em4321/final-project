import { createSlice } from "@reduxjs/toolkit";
import sha256 from "sha256";
const initialState = { screen: 0 };
import { addToPassword } from "../secrets";
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setNewUser: (state, { payload }) => {
      payload.password = sha256(payload.password + { addToPassword });
      state.user = payload;
    },
    setScreen: (state, { payload }) => {
      state.screen = payload;
    },
  },
});

export const { setNewUser, setScreen } = accountSlice.actions;

export const selectScreen = (state) => state.account.screen;
export const selectUser = (state) => state.account.user;

export default accountSlice.reducer;