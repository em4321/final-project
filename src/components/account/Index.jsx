import { useDispatch, useSelector } from "react-redux";
import Signup from "./Signup";
import { selectScreen, setScreen } from "../../redux/accountSlice";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Index = () => {
  const screen = useSelector(selectScreen);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="index">
        {!token && (
          <>
            <div className="account-nav">
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
            </div>
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
