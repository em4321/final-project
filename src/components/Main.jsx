import { useSelector } from "react-redux";
import {
  getLoading,
  getSearch,
  getSort,
  selectRestaurant,
} from "../redux/restaurantSlice";
import Restaurant from "./Restaurant";
import Spinner from "./Spinner";
import ImageHeader from "./ImageHeader";
import Nav from "./Nav";

const Main = () => {
  const restaurantData = useSelector(selectRestaurant);
  const searchRestaurants = useSelector(getSearch);
  const sort = useSelector(getSort);
  const loading = useSelector(getLoading);

  if (!restaurantData) {
    return (
      <div className="background">
        <div className="root">
          <h1>Searching restaurants in your area</h1>
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

  return (
    <>
      <ImageHeader />
      <Nav />
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
