import { useState } from "react";
import { useDispatch } from "react-redux";
import { setReview } from "../../redux/accountSlice";
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
          type="text"
          id="review"
          name="review"
          placeholder="Optional: What did you like?"
          style={{
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
