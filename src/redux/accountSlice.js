import { createSlice } from "@reduxjs/toolkit";
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
    clearStore: (state) => {
      state.screen = 1;
      state.favourites = [];
    },
    setReview: (state, { payload }) => {
      console.log(payload);
      const duplicate = state.favourites.some((account) => {
        return account.singleRestaurant.id === payload.singleRestaurant.id;
      });
      if (duplicate) {
        state.message =
          payload.singleRestaurant.name +
          " - " +
          payload.singleRestaurant.location.city +
          " has already been added!";
        return;
      }
      state.message =
        "Added " +
        payload.singleRestaurant.name +
        " - " +
        payload.singleRestaurant.location.city +
        " to favourites!";
      state.favourites.push({
        name: payload.singleRestaurant.name,
        city: payload.singleRestaurant.location.city,
        image: payload.singleRestaurant.image_url,
        review: payload.review,
        singleRestaurant: payload.singleRestaurant,
        date: Date.now(),
      });
      saveStore("account", state);
    },
    setRemove: (state, { payload }) => {
      console.log(payload);
      const index = state.favourites.findIndex((account) => {
        return account.singleRestaurant.id === payload;
      });
      state.favourites.splice(index, 1);
      saveStore("account", state);
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
  setTotal,
  clearStore,
} = accountSlice.actions;

export const selectMessage = (state) => state.account.message;
export const selectScreen = (state) => state.account.screen;
export const selectUser = (state) => state.account.user;
export const selectLoggedIn = (state) => state.account.loggedIn;
export const selectFavourites = (state) => state.account.favourites;

export default accountSlice.reducer;
