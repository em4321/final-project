import { useSelector } from "react-redux";
import { getSearch, selectRestaurant } from "../redux/restaurantSlice";
import Restaurant from "./Restaurant";
import { Route, Routes } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";

const Main = () => {
  const restaurantData = useSelector(selectRestaurant);
  const searchRestaurants = useSelector(getSearch);
  console.log(restaurantData);

  if (!restaurantData) {
    return <p>Loading</p>;
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
  return (
    <>
      <Routes>
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/" element={<Restaurant />} />
      </Routes>

      <div className="searchResults">
        {filtered.map((restaurant) => {
          return <Restaurant key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </>
  );
};

export default Main;
