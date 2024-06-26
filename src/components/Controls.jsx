import { useDispatch } from "react-redux";
import { sortRestaurants } from "../redux/restaurantSlice";

const Controls = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="sort">
        <select
          onChange={(e) => {
            dispatch(sortRestaurants(e.target.value));
          }}
        >
          <option value="">Best Match</option>
          <option value="Distance">Distance</option>
          <option value="Highest-Rating">Highest Rating</option>
          <option value="Lowest-Price">Price Low-High</option>
          <option value="Highest-Price">Price High-Low</option>
        </select>
      </div>
    </>
  );
};

export default Controls;
