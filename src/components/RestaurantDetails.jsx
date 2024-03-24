import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSingleRestaurant } from "../redux/restaurantSlice";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = useSelector(selectSingleRestaurant);

  return (
    <>
      <div className="singleRestaurant">
        <div className="details">
          <img src={restaurant.image_url} />
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
          <h2>Phone: {restaurant.display_phone}</h2>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
