import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage, setReview } from "../../redux/accountSlice";
import { FaRegHeart } from "react-icons/fa";

const Review = ({ singleRestaurant, setFavourite }) => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setReview({ review: userInput.review, singleRestaurant }));
    dispatch(setMessage("Added " + singleRestaurant.name + " to favourites!"));
    setFavourite();
  };

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };
  return (
    <div className="review">
      <form onSubmit={onSubmit} onInput={onInput}>
        <label htmlFor="review"></label>
        <input
          type="text"
          id="review"
          name="review"
          placeholder="What did you like?"
          style={{
            // fontSize: "2rem",
            textAlign: "center",
            height: "5rem",
            width: "20rem",
          }}
        ></input>
        <button
          style={{
            marginLeft: "1rem",
            borderRadius: "2rem",
            padding: "1rem",
          }}
        >
          Submit
          <FaRegHeart
            style={{
              fontSize: "2rem",
              marginLeft: "1rem",
            }}
          />
        </button>
      </form>
    </div>
  );
};

export default Review;
