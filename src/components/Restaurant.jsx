import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";

const Restaurant = ({ restaurant }) => {
  const rating = [];
  for (let i = 1; i < restaurant.rating; i++) {
    rating.push("");
  }
  return (
    <>
      <div className="results">
        {/* temporarily added fake placeholder api for testing */}
        {/* <h1>(Placeholder Data)</h1>
        <h1>{restaurant.name}</h1>
        <h2>Phone: {restaurant.phone}</h2> */}

        {/* from the real api - DON'T DELETE! */}
        <h1>{restaurant.name}</h1>
        <p>{restaurant.categories[0].title}</p>
        <Link className="link" to={"/restaurant/" + restaurant.id}>
          <img className="restaurantImage" src={restaurant.image_url} />
        </Link>

        <p>
          {restaurant.rating}
          {""}
          {rating.map((restaurant, index) => {
            return (
              <FaRegStar
                className="stars"
                key={index}
                style={{ color: "#362417" }}
              />
            );
          })}
          {restaurant.rating !== Math.round(restaurant.rating) && (
            <FaRegStarHalf className="stars" />
          )}
          {restaurant.rating == Math.round(restaurant.rating) && (
            <FaRegStar className="stars" style={{ color: "#362417" }} />
          )}{" "}
        </p>

        <p>Price: {restaurant.price}</p>

        <p>Distance: approx {Math.round(restaurant.distance / 1000)} km</p>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Restaurant;
