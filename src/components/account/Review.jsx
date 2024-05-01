import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage, setReview } from "../../redux/accountSlice";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

const Review = ({ singleRestaurant, setFavourite }) => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:6002/user/addFavourite`,
        { review: userInput.review, singleRestaurant },
        { headers: { token: localStorage.getItem("token") } }
      );
      console.log(data);
      dispatch(setReview({ review: userInput.review, singleRestaurant }));
      setFavourite();
      dispatch(
        setMessage(
          `Added ${singleRestaurant.name} - ${singleRestaurant.location.city} to favourites`
        )
      );
    } catch (e) {}
  };

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };
  return (
    <div className="review">
      <form onSubmit={onSubmit} onInput={onInput}>
        <label htmlFor="review"></label>
        <input
          className="reviewInput"
          type="text"
          id="review"
          name="review"
          placeholder="Optional: What did you like?"
        ></input>
        <button
          style={{
            marginLeft: "0.5rem",
            borderRadius: "1rem",
            padding: "1rem",
            height: "8rem",
          }}
        >
          <FaRegHeart className="reviewButton" />
        </button>
      </form>
    </div>
  );
};

export default Review;
