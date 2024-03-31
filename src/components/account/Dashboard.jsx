import { useDispatch, useSelector } from "react-redux";
import {
  selectFavourites,
  setLoggedIn,
  setRemove,
  setScreen,
} from "../../redux/accountSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

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
          <h2>
            {favourites.length} Favourites
            <FaRegHeart
              style={{
                fontSize: "2rem",
                marginLeft: "1rem",
              }}
            />
          </h2>
          {favourites &&
            favourites.map((favourite, index) => {
              return (
                <div className="container" key={index}>
                  <p>{new Date(favourite.date).toDateString()}</p>
                  <h1>
                    {favourite.name} - {favourite.city}
                  </h1>
                  <span>
                    <img src={favourite.image} style={{ width: "35vw" }} />{" "}
                    <button
                      className="remove"
                      onClick={() => {
                        dispatch(setRemove(favourite.id));
                      }}
                    >
                      <FaRegTrashAlt className="trash" />
                    </button>
                  </span>
                  <div className="restaurantInfo">
                    <p>What did you like? {favourite.review} </p>
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
