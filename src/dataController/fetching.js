import { addRestaurants, setIsLoading } from "../redux/restaurantSlice";
import axios from "axios";
import { store } from "../redux/store";

// const yelp = `https://api.yelp.com/v3/businesses/search?&categories=restaurants&limit=20`;

export const getApiData = async (location, name) => {
  store.dispatch(setIsLoading(true));
  const locationTerm = location ? location : "london";

  try {
    const { data } = await axios.get(
      `http://localhost:6002/proxy/${locationTerm}/${name}`
    );

    store.dispatch(setIsLoading(false));
    store.dispatch(addRestaurants(data.businesses));
  } catch (e) {
    console.log(e);
  }
};
