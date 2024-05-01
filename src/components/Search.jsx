import { getApiData } from "../dataController/fetching";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [location, setLocation] = useState(" ");
  const [name, setName] = useState(" ");

  const onInput = (e) => {
    if (e.target.id === "location") {
      setLocation(e.target.value);
    }

    if (e.target.id === "name") {
      setName(e.target.value);
    }
  };

  return (
    <>
      <div>
        <span className="searchBar">
          <input
            className="searchInput"
            type="text"
            name="location"
            id="location"
            placeholder="Enter location (required) - London, Berlin, New York, Melbourne..."
            onInput={onInput}
          />

          <input
            className="searchInput"
            type="text"
            name="name"
            id="name"
            placeholder="Enter category or name (optional) - Steakhouse, Cocktails, Starbucks..."
            onInput={onInput}
          />
          <button
            className="searchButton"
            type="text"
            name="name"
            id="name"
            onClick={(e) => {
              getApiData(location, name);
            }}
          >
            <FaSearch />
          </button>
        </span>
      </div>
    </>
  );
};

export default Search;
