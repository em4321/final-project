import { useDispatch } from "react-redux";
import { sortRestaurants } from "../redux/restaurantSlice";
import { getApiData } from "../dataController/fetching";
const Controls = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="controls">
        <div className="searchBar">
          <label htmlFor="search"></label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Restaurants"
            onInput={getApiData}
          />
        </div>
        <div className="sort">
          <select
            onChange={(e) => {
              dispatch(sortRestaurants(e.target.value));
            }}
            style={{
              margin: "10px",
              width: "80px",
            }}
          >
            <option value="">Best Match</option>
            <option value="Distance">Distance</option>
            <option value="Highest-Rating">Highest Rating</option>
            <option value="Lowest-Rating">Lowest Rating</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Controls;
