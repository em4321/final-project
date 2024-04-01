import { addRestaurants, setIsLoading } from "../redux/restaurantSlice";
import axios from "axios";
import { store } from "../redux/store";
import { apiKey, debugging } from "../secrets";
import { key } from "../secrets";
import { cors } from "../secrets";

const yelp = `https://api.yelp.com/v3/businesses/search?&categories=restaurants&limit=20`;

export const getApiData = async (location, name) => {
  store.dispatch(setIsLoading(true));
  const locationTerm = location ? location : "london";

  try {
    if (debugging) {
      const { data } = await axios.get(
        `${cors}${yelp}&location=${locationTerm}&term=${name}`,

        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "x-cors-api-key": `${key}`,
          },
        }
      );

      store.dispatch(setIsLoading(false));
      store.dispatch(addRestaurants(data.businesses));
    } else {
      const { data } = await axios.get(
        `${yelp}&location=${locationTerm}&term=${name}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      store.dispatch(setIsLoading(false));
      store.dispatch(addRestaurants(data.businesses));
    }
  } catch (e) {
    console.log("no data", e);
  }
};
