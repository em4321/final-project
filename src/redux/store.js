import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";
import accountReducer from "./accountSlice";

export const store = configureStore(
  {
    reducer: {
      restaurant: restaurantReducer,
      account: accountReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
