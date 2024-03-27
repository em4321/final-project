import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  favouriteRestaurant,
  selectRestaurant,
} from "../redux/restaurantSlice";

const RestaurantDetails = ({ index }) => {
  const { id } = useParams();

  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();

  console.log(restaurant, id);
  const singleRestaurant = restaurant.find((item) => {
    return item.id === id;
  });
  const rating = [];
  for (let i = 1; i < singleRestaurant.rating; i++) {
    rating.push("");
  }

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

          <h1>{singleRestaurant.name} </h1>

          <img
            className="singleRestaurantImage"
            src={singleRestaurant.image_url}
          />
          <p>
            {singleRestaurant.categories[0].title} (
            {singleRestaurant.review_count} reviews)
          </p>

          <span className="numberRating">{singleRestaurant.rating} </span>

          <span>
            {rating.map((singleRestaurant, index) => {
              return (
                <FaRegStar
                  className="stars"
                  key={index}
                  style={{ color: "#362417" }}
                />
              );
            })}
            {singleRestaurant.rating !==
              Math.round(singleRestaurant.rating) && (
              <FaRegStarHalf className="stars" />
            )}
            {singleRestaurant.rating == Math.round(singleRestaurant.rating) && (
              <FaRegStar className="stars" style={{ color: "#362417" }} />
            )}{" "}
          </span>
          <p>Average price: {singleRestaurant.price}</p>
        </div>

        <div className="restaurantInfo">
          <p>
            Location: {""}
            {singleRestaurant.location.address1},{" "}
            {singleRestaurant.location.zip_code},{" "}
            {singleRestaurant.location.city}
          </p>
          <p>
            Tel: {""}
            {singleRestaurant.display_phone}
          </p>
        </div>

        <button
          className="favourite"
          onClick={() => {
            dispatch(favouriteRestaurant(singleRestaurant.id));
          }}
        >
          <FaRegHeart
            className="heart"
            style={{
              color: singleRestaurant.favourite ? "#f5b180" : "#04030f",
            }}
          />
        </button>
      </div>
      <div className="line"></div>
    </>
  );
};

export default RestaurantDetails;
