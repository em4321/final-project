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
  },
});

export const { addRestaurants, sortRestaurants, searchRestaurant } =
  restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurantData;
export const getSort = (state) => state.restaurant.sort;
export const getSearch = (state) => state.restaurant.search;

export default restaurantSlice.reducer;
