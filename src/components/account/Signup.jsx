import { useState } from "react";
import { useDispatch } from "react-redux";
import { setScreen } from "../../redux/accountSlice";
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
          <small>Your password must be at least 8 characters long</small>
          <p>
            Already have an account?{" "}
            <button
              className="signIn"
              onClick={() => {
                dispatch(setScreen(1));
              }}
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
