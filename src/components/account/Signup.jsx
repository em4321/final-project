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

  const onSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "http://localhost:6002/user/add",
      userInput
    );
    if (data.status) {
      localStorage.setItem("token", data.token);
      dispatch(setScreen(2));
    }
  };

  return (
    <>
      <div className="form">
        <div className="signup-page">
          <h1>Create an account</h1>
          <form onInput={onInput} onSubmit={onSubmit}>
            <UserCredentials name="Create account" />
          </form>
          <p>Your password must be at least 8 characters</p>
        </div>
      </div>
    </>
  );
};

export default Signup;
