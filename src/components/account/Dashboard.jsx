import { useDispatch, useSelector } from "react-redux";
import {
  selectFavourites,
  setLoggedIn,
  setScreen,
} from "../../redux/accountSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  return (
    <>
      <h2>Dashboard</h2>
      {favourites &&
        favourites.map((favourite) => {
          return (
            <div>
              <h1>{new Date(favourite.date).toDateString()}</h1>
              <p>Restaurant ID: {favourite.id}</p>
              <p>Rated: {favourite.rated}</p>
            </div>
          );
        })}
      <button
        onClick={() => {
          dispatch(setLoggedIn());
          dispatch(setScreen(1));
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Dashboard;
