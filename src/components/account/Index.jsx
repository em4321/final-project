import { useDispatch, useSelector } from "react-redux";
import Signup from "./Signup";
import { selectScreen, setScreen } from "../../redux/accountSlice";
import Login from "./Login";

const Index = () => {
  const screen = useSelector(selectScreen);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(setScreen(0));
          }}
        >
          Signup
        </button>
        <button
          onClick={() => {
            dispatch(setScreen(1));
          }}
        >
          Login
        </button>
      </div>
      {screen === 0 ? <Signup /> : <Login />}
    </>
  );
};

export default Index;