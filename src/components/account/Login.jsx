import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  setLoggedIn,
  setMessage,
  setScreen,
} from "../../redux/accountSlice";
import UserCredentials from "./UserCredentials";
import sha256 from "sha256";
import { addToPassword } from "../../secrets";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const hashedPassword = sha256(userInput.password + { addToPassword });

    if (user.password === hashedPassword) {
      dispatch(setScreen(2));
      dispatch(setLoggedIn());
    } else {
      dispatch(setMessage("Login details are incorrect. Please try again!"));
    }
  };

  console.log(userInput);
  return (
    <>
      <form onInput={onInput} onSubmit={onSubmit}>
        <UserCredentials />
      </form>
      <button className="radio" type="radio" name="radio" id="radio"></button>
      <label htmlFor="radio">Remember my details</label>
      <p>Forgotten password?</p>
    </>
  );
};

export default Login;
