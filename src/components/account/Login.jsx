import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setMessage } from "../../redux/accountSlice";
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
      dispatch(setMessage("Login details are correct"));
    } else {
      dispatch(setMessage("Login details are incorrect. Please try again!"));
    }
  };

  console.log(userInput);
  return (
    <>
      {" "}
      <h1>Log in</h1>
      <form onInput={onInput} onSubmit={onSubmit}>
        <UserCredentials />
      </form>
    </>
  );
};

export default Login;
