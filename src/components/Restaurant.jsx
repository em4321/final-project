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
        <div className="container">
          <div className="name">
            <h1>{restaurant.name}</h1>
          </div>
          <h2>{restaurant.location.city}</h2>
          <h2>{restaurant.location.zip_code}</h2>
          <Link className="link" to={"/restaurant/" + restaurant.id}>
            <img className="restaurantImage" src={restaurant.image_url} />
          </Link>
        </div>
        <div className="restaurantInfo">
          <p>
            {restaurant.categories[0].title} {restaurant.price}
          </p>

          <span className="numberRating"> {restaurant.rating} / 5 </span>
          <span>
            {rating.map((restaurant, index) => {
              return <FaRegStar className="stars" key={index} />;
            })}
            {restaurant.rating !== Math.round(restaurant.rating) && (
              <FaRegStarHalf className="stars" />
            )}
            {restaurant.rating == Math.round(restaurant.rating) &&
              restaurant.rating > 0.5 && <FaRegStar className="stars" />}
          </span>

          <p>Distance: approx {Math.round(restaurant.distance / 1000)} km</p>
        </div>{" "}
      </div>
      <div className="line"></div>
    </>
  );
};

export default Restaurant;
