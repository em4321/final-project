import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  setLoggedIn,
  setMessage,
  setReview,
  setScreen,
} from "../../redux/accountSlice";
import UserCredentials from "./UserCredentials";
import sha256 from "sha256";
import { addToPassword } from "../../secrets";
import axios from "axios";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  // send to api
  const onSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "http://localhost:6002/user/login",
      userInput
    );
    console.log(data);
    if (data.status) {
      dispatch(setScreen(2));
      dispatch(setLoggedIn());
      localStorage.setItem("token", data.token);
      if (data.favourites && data.favourites.length > 0) {
        data.favourites.forEach((item) => {
          dispatch(setReview(item));
        });
      }
    } else {
      dispatch(setMessage("Details are incorrect"));
    }
  };

  console.log(userInput);
  return (
    <>
      <form onInput={onInput} onSubmit={onSubmit}>
        <UserCredentials name="Login" />
      </form>
      <input type="checkbox" id="remember" name="remember"></input>
      <label htmlFor="remember">Remember me</label>
    </>
  );
};

export default Login;
