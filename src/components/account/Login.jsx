import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/accountSlice";
import UserCredentials from "./UserCredentials";
import sha256 from "sha256";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const hashedPassword = sha256(userInput.password + "ajdc3ksht1yp4gjd2bef");

    if (user.password === hashedPassword) {
      console.log("password is correct");
    } else {
      console.log("password is incorrect");
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
