import { useDispatch, useSelector } from "react-redux";
import {
  clearStore,
  selectFavourites,
  setRemove,
} from "../../redux/accountSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { MdNoPhotography } from "react-icons/md";

const Dashboard = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);

  const logout = async () => {
    const { data } = await axios.delete(`http://localhost:6002/user/logout`, {
      headers: { token: localStorage.getItem("token") },
    });

    if (data.status) {
      localStorage.clear();
      dispatch(clearStore());
    }
  };

  return (
    <>
      <button className="logout" onClick={logout}>
        Logout
      </button>
      <div className="results">
        <div className="favouritesDashboard">
          <h1>Favourites Dashboard</h1>{" "}
          <h2>
            {favourites.length} Favourites
            <FaRegHeart
              style={{
                fontSize: "2rem",
                marginLeft: "1rem",
              }}
            />
          </h2>
        </div>
        {favourites &&
          favourites.map((favourite, index) => {
            return (
              <div className="container" key={index}>
                <p>{new Date(favourite.date).toDateString()}</p>
                <h1>
                  {favourite.name} - {favourite.city}
                </h1>
                <span>
                  {favourite.image.length > 0 && (
                    <img
                      className="singleRestaurantImage"
                      src={favourite.image}
                    />
                  )}
                  {favourite.image.length == 0 && (
                    <MdNoPhotography className="noImage" />
                  )}
                  <button
                    className="remove"
                    onClick={async () => {
                      dispatch(setRemove(favourite.singleRestaurant.id));

                      const { data } = await axios.delete(
                        `http://localhost:6002/user/deleteFavourite`,
                        {
                          headers: {
                            token: localStorage.getItem("token"),
                            id: favourite.singleRestaurant.id,
                          },
                        }
                      );
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
    </>
  );
};

export default Dashboard;
