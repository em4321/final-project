import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  favouriteRestaurant,
  selectRestaurant,
} from "../redux/restaurantSlice";
import Spinner from "./Spinner";

const RestaurantDetails = ({ index }) => {
  const { id } = useParams();

  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();

  console.log(restaurant, id);
  const singleRestaurant = restaurant.find((item) => {
    return item.id === id;
  });

  console.log(singleRestaurant);

  if (!singleRestaurant) {
    return <p>Restaurant not found</p>;
  }
  return (
    <>
      <div className="singleRestaurant" key={index}>
        <div className="details">
          {/* temporarily added fake placeholder api for testing */}
          {/* <h1>(Placeholder Data)</h1>
          <h1>{restaurant.name}</h1>
          <h2>Phone: {restaurant.phone}</h2> */}

          {/* from the real api - DON'T DELETE! */}

          <img src={singleRestaurant.image_url} />
          <h1>
            {singleRestaurant.name} {singleRestaurant.location.city}
          </h1>
          <p>Category: {singleRestaurant.categories[0].title}</p>
          <p>Rating: {singleRestaurant.rating}</p>
        </div>
        <div className="restaurantInfo">
          <h2>
            Address: {singleRestaurant.location.address1},{" "}
            {singleRestaurant.location.zip_code}
          </h2>
          <h2>Phone: {singleRestaurant.display_phone}</h2>
        </div>
        <button
          // button isn't working - needs fixing
          className="favourite"
          style={{
            backgroundColor: singleRestaurant.favourite ? "#f66e85" : "#f5f580",
          }}
          onClick={() => {
            dispatch(favouriteRestaurant(singleRestaurant.id));
          }}
        >
          Favourite
        </button>
      </div>
      <div className="line"></div>
    </>
  );
};

export default RestaurantDetails;
