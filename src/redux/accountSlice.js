import { createSlice } from "@reduxjs/toolkit";
import sha256 from "sha256";
import { addToPassword } from "../secrets";
import { getStore, saveStore } from "./diskUtils";

const initialState = {
  screen: 1,
  favourites: [],
};
const diskData = getStore("account");

export const accountSlice = createSlice({
  name: "account",
  initialState: diskData ? diskData : initialState,
  reducers: {
    setNewUser: (state, { payload }) => {
      payload.password = sha256(payload.password + { addToPassword });
      state.user = payload;
      saveStore("account", state);
    },
    setScreen: (state, { payload }) => {
      state.screen = payload;
      saveStore("account", state);
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
    setLoggedIn: (state) => {
      state.loggedIn = !state.loggedIn;
      saveStore("account", state);
    },
    setReview: (state, { payload }) => {
      const duplicate = state.favourites.some((account) => {
        return account.id === payload;
      });
      if (duplicate) {
        return;
      }
      state.favourites.push({
        name: payload.singleRestaurant.name,
        image: payload.singleRestaurant.image_url,
        review: payload.review,
        singleRestaurant: payload.singleRestaurant,
        date: Date.now(),
      });
      saveStore("account", state);
    },
    setRemove: (state, { payload }) => {
      const index = state.favourites.findIndex((account) => {
        return account.id === payload;
      });
      state.favourites.splice(index, 1);
    },
  },
});

export const {
  setNewUser,
  setScreen,
  setMessage,
  setLoggedIn,
  setReview,
  setRemove,
} = accountSlice.actions;

export const selectMessage = (state) => state.account.message;
export const selectScreen = (state) => state.account.screen;
export const selectUser = (state) => state.account.user;
export const selectLoggedIn = (state) => state.account.loggedIn;
export const selectFavourites = (state) => state.account.favourites;

export default accountSlice.reducer;
