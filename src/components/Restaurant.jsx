import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdNoPhotography } from "react-icons/md";

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
            <div>
              {restaurant.image_url.length > 0 && (
                <img className="restaurantImage" src={restaurant.image_url} />
              )}
              {restaurant.image_url.length == 0 && (
                <MdNoPhotography className="restaurantImage" />
              )}
            </div>
          </Link>
        </div>
        <div className="restaurantInfo">
          <p>
            {restaurant.categories[0].title} {restaurant.price}
          </p>

          <span className="numberRating"> {restaurant.rating} / 5 </span>
          <span>
            {rating.map((restaurant, index) => {
              return <FaStar className="stars" key={index} />;
            })}
            {restaurant.rating !== Math.round(restaurant.rating) && (
              <FaStarHalfAlt className="stars" />
            )}
            {restaurant.rating == Math.round(restaurant.rating) &&
              restaurant.rating > 0.5 && <FaStar className="stars" />}
          </span>

          <p>Distance: approx {Math.round(restaurant.distance / 1000)} km</p>
        </div>{" "}
      </div>
      <div className="line"></div>
    </>
  );
};

export default Restaurant;
