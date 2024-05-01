import { addRestaurants, setIsLoading } from "../redux/restaurantSlice";
import axios from "axios";
import { store } from "../redux/store";

export const getApiData = async (location, name) => {
  store.dispatch(setIsLoading(true));
  const locationTerm = location ? location : "london";
  console.log(locationTerm, name);
  try {
    const { data } = await axios.get(
      `http://localhost:6002/proxy/${locationTerm}/${name}`
    );
    console.log(data);
    store.dispatch(setIsLoading(false));

    if (data.status === 0) {
      console.log("sending empty array");
      store.dispatch(addRestaurants([]));
      return;
    }

    store.dispatch(addRestaurants(data.businesses));
  } catch (e) {
    console.log(e);
  }
};
