import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage, setReview } from "../../redux/accountSlice";

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
    <form onSubmit={onSubmit} onInput={onInput}>
      <label htmlFor="review">What did you like?</label>
      <input type="text" id="review" name="review"></input>
      <button>Add to favourites</button>
    </form>
  );
};

export default Review;
