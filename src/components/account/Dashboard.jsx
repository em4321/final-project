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
      <h2>Favourites Dashboard</h2>
      <div className="favouritesDashboard">
        {favourites &&
          favourites.map((favourite) => {
            return (
              <div>
                <p>{new Date(favourite.date).toDateString()}</p>
                <h1>{favourite.name}</h1>
                <img src={favourite.image} style={{ width: "35vw" }} />
                <p>What did you like? {favourite.review}</p>
                <div className="line"></div>
              </div>
            );
          })}

        <button
          className="logout"
          onClick={() => {
            dispatch(setLoggedIn());
            dispatch(setScreen(1));
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
