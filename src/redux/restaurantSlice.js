import { createSlice } from "@reduxjs/toolkit";
const dataFromDisk = JSON.parse(localStorage.getItem("restaurantData"));
const initialState = { restaurantData: dataFromDisk };

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addRestaurants: (state, { payload }) => {
      state.restaurantData = payload;
      localStorage.setItem(
        "restaurantData",
        JSON.stringify(state.restaurantData)
      );
    },
    sortRestaurants: (state, { payload }) => {
      state.sort = payload;
    },
    searchRestaurant: (state, { payload }) => {
      state.search = payload;
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
  // searchButton,
  favouriteRestaurant,
  setIsLoading,
} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurantData;
export const getSort = (state) => state.restaurant.sort;
export const getSearch = (state) => state.restaurant.search;
export const getLoading = (state) => state.restaurant.loading;

export default restaurantSlice.reducer;
