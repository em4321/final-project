import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser, setScreen } from "../../redux/accountSlice";
import UserCredentials from "./UserCredentials";

const Signup = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setNewUser(userInput));
    dispatch(setScreen(1));
  };

  console.log(userInput);
  return (
    <>
      <div className="signup-page">
        <h1>Create an account</h1>
        <form onInput={onInput} onSubmit={onSubmit}>
          <UserCredentials name="Create account" />
        </form>
        <p>Your password must be at least 8 characters</p>
      </div>
    </>
  );
};

export default Signup;
