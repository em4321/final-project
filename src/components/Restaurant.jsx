import { Link } from "react-router-dom";

const Restaurant = ({ restaurant }) => {
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
        <img src={restaurant.image_url} />
        <p>
          {restaurant.location.address1}, {restaurant.location.zip_code}
        </p>
        {restaurant.location.city}
        <p>Rating: {restaurant.rating}</p>
        <p>Distance: {restaurant.distance}</p>
        <Link className="link" to={"/restaurant/" + restaurant.id}>
          Restaurant Details
        </Link>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Restaurant;
