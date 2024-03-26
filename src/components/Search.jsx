import { useDispatch } from "react-redux";
import { getApiData } from "../dataController/fetching";
const Search = () => {
  return (
    <>
      <div className="searchBar">
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Restaurants"
          onInput={getApiData}
        />

        {/* <button className="searchButton">Search</button> */}
      </div>
    </>
  );
};

export default Search;
