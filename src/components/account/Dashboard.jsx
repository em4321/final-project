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
      <button
        className="logout"
        onClick={() => {
          dispatch(setLoggedIn());
          dispatch(setScreen(1));
        }}
      >
        Logout
      </button>
      <div className="results">
        <div className="favouritesDashboard">
          <h1>Favourites Dashboard</h1>
          {favourites &&
            favourites.map((favourite) => {
              return (
                <div className="container">
                  <p>{new Date(favourite.date).toDateString()}</p>
                  <h1>{favourite.name}</h1>
                  <img src={favourite.image} style={{ width: "35vw" }} />
                  <div className="restaurantInfo">
                    <p>What did you like? {favourite.review}</p>
                  </div>
                  <div className="line"></div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
