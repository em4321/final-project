import { useDispatch, useSelector } from "react-redux";
import Signup from "./Signup";
import {
  selectLoggedIn,
  selectScreen,
  setScreen,
} from "../../redux/accountSlice";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Index = () => {
  const screen = useSelector(selectScreen);
  const loggedIn = useSelector(selectLoggedIn);

  const dispatch = useDispatch();

  return (
    <>
      <div className="index">
        {!loggedIn && (
          <>
            <button
              className="login"
              onClick={() => {
                dispatch(setScreen(1));
              }}
            >
              Login
            </button>

            <button
              className="signup"
              onClick={() => {
                dispatch(setScreen(0));
              }}
            >
              Signup
            </button>
          </>
        )}{" "}
        {screen === 2 && <Dashboard />}
        <div className="account-root">
          {screen === 0 && <Signup />}
          {screen === 1 && <Login />}
        </div>
      </div>
    </>
  );
};

export default Index;
