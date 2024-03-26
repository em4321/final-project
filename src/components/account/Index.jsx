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
      {!loggedIn && (
        <>
          <button
            onClick={() => {
              dispatch(setScreen(1));
            }}
          >
            Login
          </button>

          <button
            onClick={() => {
              dispatch(setScreen(0));
            }}
          >
            Signup
          </button>
        </>
      )}

      {screen === 0 && <Signup />}
      {screen === 1 && <Login />}
      {screen === 2 && <Dashboard />}
    </>
  );
};

export default Index;
