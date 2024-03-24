import { Link } from "react-router-dom";

const Restaurant = ({ restaurant }) => {
  return (
    <div className="results">
      <h1>{restaurant.name}</h1>
      <p>{restaurant.categories[0].title}</p>
      <img src={restaurant.image_url} />
      <p>
        {restaurant.location.address1}, {restaurant.location.zip_code}
      </p>

      <Link to={"./restaurant/" + restaurant.id}>Restaurant Details</Link>
    </div>
  );
};

export default Restaurant;
