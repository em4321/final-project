import { useSelector } from "react-redux";
import {
  getLoading,
  getSearch,
  getSort,
  selectRestaurant,
} from "../redux/restaurantSlice";
import Restaurant from "./Restaurant";
import Controls from "./Controls";
import Spinner from "./Spinner";

const Main = () => {
  const restaurantData = useSelector(selectRestaurant);
  const searchRestaurants = useSelector(getSearch);
  const sort = useSelector(getSort);
  const loading = useSelector(getLoading);

  console.log(restaurantData);

  if (!restaurantData) {
    return (
      <div className="background">
        <div className="root">
          <p>Search for restaurants in your area</p>
        </div>
      </div>
    );
  }
  let filtered = [...restaurantData];

  if (searchRestaurants) {
    filtered = filtered.filter((restaurant) => {
      return (
        restaurant.name.toLowerCase().includes(searchRestaurants) ||
        restaurant.location.city.toLowerCase().includes(searchRestaurants) ||
        restaurant.location.address1
          .toLowerCase()
          .includes(searchRestaurants) ||
        restaurant.location.zip_code.toLowerCase().includes(searchRestaurants)
      );
    });
  }

  //sort isn't working - needs fixing
  if (sort === "Distance") {
    filtered.sort((a, b) => {
      if (a.distance > b.distance) {
        return 1;
      }
      if (a.distance < b.distance) {
        return -1;
      }
    });
  }
  if (sort === "Highest-Rating") {
    filtered.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
    });
  }
  if (sort === "Lowest-Rating") {
    filtered.sort((a, b) => {
      if (a.rating > b.rating) {
        return 1;
      }
      if (a.rating < b.rating) {
        return -1;
      }
    });
  }

  console.log(filtered);

  return (
    <>
      <Controls />
      {loading && <Spinner />}
      {!loading && (
        <div className="searchResults">
          {filtered.map((restaurant) => {
            return <Restaurant key={restaurant.id} restaurant={restaurant} />;
          })}
        </div>
      )}
    </>
  );
};

export default Main;
