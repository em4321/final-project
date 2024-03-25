import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  favouriteRestaurant,
  selectSingleRestaurant,
} from "../redux/restaurantSlice";
import Spinner from "./Spinner";

const RestaurantDetails = ({ index, name, favourite }) => {
  const { id } = useParams();
  console.log(id);
  const restaurant = useSelector(selectSingleRestaurant);
  const dispatch = useDispatch();
  if (!restaurant) {
    return <Spinner />;
  }
  return (
    <>
      <div className="singleRestaurant" key={index}>
        <div className="details">
          {/* temporarily added fake placeholder api for testing */}
          <h1>(Placeholder Data)</h1>
          <h1>{restaurant.name}</h1>
          <h2>Phone: {restaurant.phone}</h2>

          {/* from the real api - DON'T DELETE! */}

          {/* <img src={restaurant.image_url} />
          <h1>
            {restaurant.name} {restaurant.location.city}
          </h1>
          <p>Category: {restaurant.categories[0].title}</p>
          <p>Rating: {restaurant.rating}</p>
        </div>
        <div className="restaurantInfo">
          <h2>
            Address: {restaurant.location.address1},{" "}
            {restaurant.location.zip_code}
          </h2>
          <h2>Phone: {restaurant.display_phone}</h2> */}
        </div>
        <button
          // button isn't working - needs fixing
          className="favourite"
          style={{
            backgroundColor: favourite ? "#f66e85" : "#f5f580",
          }}
          onClick={() => {
            dispatch(favouriteRestaurant(name));
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
