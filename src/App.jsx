import React, { useEffect } from "react";
import { getApiData } from "./secrets";
import Interface from "./components/Interface";
import "./css/App.css";
import Index from "./components/account";
// import { getSearch, getSort, selectRestaurant } from "./redux/restaurantSlice";
// import { useSelector } from "react-redux";

const App = () => {
  useEffect(() => {
    getApiData();
  }, []);

  // const restaurantData = useSelector(selectRestaurant);
  // const searchRestaurants = useSelector(getSearch);
  // const sort = useSelector(getSort);
  // console.log(restaurantData);

  // if (!restaurantData) {
  //   return (
  //     <div className="background">
  //       <div className="root">
  //         <p>Search for restaurants in your area</p>
  //       </div>
  //     </div>
  //   );
  // }
  // let filtered = [...restaurantData];

  // if (searchRestaurants) {
  //   filtered = filtered.filter((restaurant) => {
  //     return (
  //       restaurant.name.toLowerCase().includes(searchRestaurants) ||
  //       restaurant.location.city.toLowerCase().includes(searchRestaurants) ||
  //       restaurant.location.address1
  //         .toLowerCase()
  //         .includes(searchRestaurants) ||
  //       restaurant.location.zip_code.toLowerCase().includes(searchRestaurants)
  //     );
  //   });
  // }
  // filtered.sort((a, b) => {
  //   if (a.restaurant > b.restaurant) {
  //     return 1;
  //   }
  //   if (b.restaurant > a.restaurant) {
  //     return -1;
  //   }
  // });

  // // if (sort === "Z-A") {
  // //   filtered.reverse();
  // // }

  // if (sort === "A-Z") {
  //   filtered.sort((a, b) => {
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //   });
  // }

  // if (sort === "Distance") {
  //   filtered.sort((a, b) => {
  //     if (a.distance > b.distance) {
  //       return 1;
  //     }
  //     if (a.distance < b.distance) {
  //       return -1;
  //     }
  //   });
  // }
  // if (sort === "Rating") {
  //   filtered.sort((a, b) => {
  //     if (a.rating > b.rating) {
  //       return 1;
  //     }
  //     if (a.rating < b.rating) {
  //       return -1;
  //     }
  //   });
  // }

  // console.log(filtered);

  return (
    <>
      <Index />
      <Interface />
    </>
  );
};

export default App;
