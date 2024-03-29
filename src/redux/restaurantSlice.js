import { createSlice } from "@reduxjs/toolkit";
import { getStore, saveStore } from "./diskUtils";
// const dataFromDisk = JSON.parse(localStorage.getItem("restaurantData"));
// const initialState = { restaurantData: dataFromDisk };
const initialState = {};

const diskData = getStore("restaurant");

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: diskData ? diskData : initialState,
  reducers: {
    addRestaurants: (state, { payload }) => {
      state.restaurantData = payload;
      // localStorage.setItem(
      //   "restaurantData",
      //   JSON.stringify(state.restaurantData)
      // );
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

    // searchButton: (state, { payload }) => {
    //   state.search = payload;
    // },
    favouriteRestaurant: (state, { payload }) => {
      console.log(payload);
      const index = state.restaurantData.findIndex((restaurant) => {
        return restaurant.id === payload;
      });
      state.restaurantData[index].favourite =
        !state.restaurantData[index].favourite;
      // saveStore("restaurant", state);
    },

    setIsLoading: (state, { payload }) => {
      state.loading = payload;
      // saveStore("restaurant", state);
    },
  },
});

export const {
  addRestaurants,
  sortRestaurants,
  searchRestaurant,
  // searchButton,
  favouriteRestaurant,
  setIsLoading,
} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurantData;
export const getSort = (state) => state.restaurant.sort;
export const getSearch = (state) => state.restaurant.search;
export const getLoading = (state) => state.restaurant.loading;

export default restaurantSlice.reducer;
