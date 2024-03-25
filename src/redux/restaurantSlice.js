import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addRestaurants: (state, { payload }) => {
      state.restaurantData = payload;
    },
    sortRestaurants: (state, { payload }) => {
      state.sort = { payload };
    },
    searchRestaurant: (state, { payload }) => {
      state.search = { payload };
    },
    favouriteRestaurant: (state, { payload }) => {
      const index = state.restaurantData.findIndex((restaurant) => {
        return restaurant.name === payload;
      });
      state.restaurantData[{ index }].favourite =
        !state.restaurantData[{ index }].favourite;
    },
  },
});

export const {
  addRestaurants,
  sortRestaurants,
  searchRestaurant,
  favouriteRestaurant,
} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurantData;
export const getSort = (state) => state.restaurant.sort;
export const getSearch = (state) => state.restaurant.search;

export const selectSingleRestaurant = (state) => {
  return state.restaurant.restaurantData.find((restaurant) => {
    // not working correctly - need to fix
    return restaurant.id;
  });
};

export default restaurantSlice.reducer;
