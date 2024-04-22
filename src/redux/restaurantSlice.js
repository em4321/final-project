import { createSlice } from "@reduxjs/toolkit";
import { getStore, saveStore } from "./diskUtils";

const initialState = {};

const diskData = getStore("restaurant");

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: diskData ? diskData : initialState,
  reducers: {
    addRestaurants: (state, { payload }) => {
      state.restaurantData = payload;
      saveStore("restaurant", state);
    },
    sortRestaurants: (state, { payload }) => {
      state.sort = payload;
      saveStore("restaurant", state);
    },
    searchRestaurant: (state, { payload }) => {
      state.search = payload;
      saveStore("restaurant", state);
    },

    favouriteRestaurant: (state, { payload }) => {
      const index = state.restaurantData.findIndex((restaurant) => {
        return restaurant.id === payload;
      });
      state.restaurantData[index].favourite =
        !state.restaurantData[index].favourite;
    },

    setIsLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const {
  addRestaurants,
  sortRestaurants,
  searchRestaurant,
  favouriteRestaurant,
  setIsLoading,
} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurantData;
export const getSort = (state) => state.restaurant.sort;
export const getSearch = (state) => state.restaurant.search;
export const getLoading = (state) => state.restaurant.loading;

export default restaurantSlice.reducer;
