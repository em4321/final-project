import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { selectRestaurant } from "../redux/restaurantSlice";
import { useState } from "react";
import Review from "./account/Review";

const RestaurantDetails = ({ index }) => {
  const { id } = useParams();
  const [favourite, setFavourite] = useState(false);

  const restaurant = useSelector(selectRestaurant);

  const singleRestaurant = restaurant.find((item) => {
    return item.id === id;
  });
  const rating = [];
  for (let i = 1; i < singleRestaurant.rating; i++) {
    rating.push("");
  }

  if (!singleRestaurant) {
    return <p>Restaurant not found</p>;
  }
  return (
    <>
      <div className="singleRestaurant" key={index}>
        <div className="container">
          <div className="name">
            <h1>
              <span>
                {singleRestaurant.name} - {singleRestaurant.location.city}
                <button
                  className="favourite"
                  onClick={() => {
                    setFavourite(!favourite);
                  }}
                >
                  <FaRegHeart
                    className="heart"
                    style={{
                      color: singleRestaurant.favourite ? "#f5b180" : "#04030f",
                    }}
                  />
                </button>
                {favourite && (
                  <Review
                    singleRestaurant={singleRestaurant}
                    setFavourite={setFavourite}
                  />
                )}
              </span>
            </h1>
          </div>
          <img
            className="singleRestaurantImage"
            src={singleRestaurant.image_url}
          />
          <div className="restaurantInfo">
            <p>
              {singleRestaurant.categories[0].title} (
              {singleRestaurant.review_count} reviews)
            </p>
            <span className="numberRating"> {singleRestaurant.rating} </span>
            <span>
              {rating.map((singleRestaurant, index) => {
                return <FaRegStar className="stars" key={index} />;
              })}
              {singleRestaurant.rating !==
                Math.round(singleRestaurant.rating) && (
                <FaRegStarHalf className="stars" />
              )}
              {singleRestaurant.rating ==
                Math.round(singleRestaurant.rating) && (
                <FaRegStar className="stars" />
              )}{" "}
            </span>
            <p>Average price: {singleRestaurant.price}</p>
          </div>

          <div className="restaurantInfo">
            <h1>Location: </h1>
            <p>
              {singleRestaurant.location.address1},{" "}
              {singleRestaurant.location.zip_code},{" "}
              {singleRestaurant.location.city}
            </p>

            <address>
              <h1>
                Tel:{" "}
                <a href={`tel: ${singleRestaurant.display_phone}`}>
                  {singleRestaurant.display_phone}
                </a>{" "}
              </h1>
            </address>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default RestaurantDetails;
