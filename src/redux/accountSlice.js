import { createSlice } from "@reduxjs/toolkit";
import sha256 from "sha256";
import { addToPassword } from "../secrets";
import { getStore, saveStore } from "./diskUtils";

const initialState = {
  screen: 1,
  favourites: [
    { id: 1, rated: 5, date: Date.now() },
    { id: 2, rated: 4, date: Date.now() },
    { id: 3, rated: 3, date: Date.now() },
  ],
};
const diskData = getStore();

export const accountSlice = createSlice({
  name: "account",
  initialState: diskData ? diskData : initialState,
  reducers: {
    setNewUser: (state, { payload }) => {
      payload.password = sha256(payload.password + { addToPassword });
      state.user = payload;
      saveStore(state);
    },
    setScreen: (state, { payload }) => {
      state.screen = payload;
      saveStore(state);
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
    setLoggedIn: (state) => {
      state.loggedIn = !state.loggedIn;
      saveStore(state);
    },
  },
});

export const { setNewUser, setScreen, setMessage, setLoggedIn } =
  accountSlice.actions;

export const selectMessage = (state) => state.account.message;
export const selectScreen = (state) => state.account.screen;
export const selectUser = (state) => state.account.user;
export const selectLoggedIn = (state) => state.account.loggedIn;
export const selectFavourites = (state) => state.account.favourites;

export default accountSlice.reducer;
