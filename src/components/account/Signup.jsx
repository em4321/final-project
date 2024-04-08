import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser, setScreen } from "../../redux/accountSlice";
import UserCredentials from "./UserCredentials";
import axios from "axios";

const Signup = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  //send to store (front end)
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(setNewUser(userInput));

  //send it to api (back end)
  const onSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "http://localhost:6002/user/add",
      userInput
    );
    console.log(data);
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
