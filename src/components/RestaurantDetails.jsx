import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { selectRestaurant } from "../redux/restaurantSlice";
import { useState } from "react";
import Review from "./account/Review";
import { MdNoPhotography } from "react-icons/md";
import { selectLoggedIn, setScreen } from "../redux/accountSlice";

const RestaurantDetails = ({ index }) => {
  const { id } = useParams();
  const [favourite, setFavourite] = useState(false);
  const loggedIn = useSelector(selectLoggedIn);
  const restaurant = useSelector(selectRestaurant);
  console.log(loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <div className="card">
          <div className="container">
            <div className="name">
              <h1>
                {singleRestaurant.name} - {singleRestaurant.location.city}
              </h1>
              <button
                className="favourite"
                onClick={() => {
                  if (!loggedIn) {
                    dispatch(setScreen(1));
                    navigate("/account");
                    return;
                  }
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
            </div>

            <div>
              {singleRestaurant.image_url.length > 0 && (
                <img
                  className="singleRestaurantImage"
                  src={singleRestaurant.image_url}
                />
              )}
              {singleRestaurant.image_url.length == 0 && (
                <MdNoPhotography className="noImage" />
              )}
            </div>
          </div>
          <div className="restaurantInfo">
            <p>
              {singleRestaurant.categories[0].title} (
              {singleRestaurant.review_count} reviews)
            </p>
            <p className="numberRating">
              {" "}
              {singleRestaurant.rating} stars out of 5{" "}
            </p>
            <span>
              {rating.map((singleRestaurant, index) => {
                return <FaStar className="stars" key={index} />;
              })}
              {singleRestaurant.rating !==
                Math.round(singleRestaurant.rating) && (
                <FaStarHalfAlt className="stars" />
              )}
              {singleRestaurant.rating == Math.round(singleRestaurant.rating) &&
                singleRestaurant.rating > 0.5 && (
                  <FaStar className="stars" />
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
