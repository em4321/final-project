import { getApiData } from "../dataController/fetching";
import { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState(" ");
  const [name, setName] = useState(" ");

  const onInput = (e) => {
    if (e.target.id === "location") {
      setLocation(e.target.value);
      // getApiData(e.target.value, name);
    }

    if (e.target.id === "name") {
      setName(e.target.value);
      // getApiData(location, e.target.value);
    }
  };

  return (
    <>
      <div>
        <span className="searchBar">
          {/* <label htmlFor="location">Required:</label> */}
          <input
            className="searchInput"
            type="text"
            name="location"
            id="location"
            placeholder="Enter location: London, New York, Berlin, Melbourne..."
            onInput={onInput}
          />

          {/* <label htmlFor="name">Optional:</label> */}

          <input
            className="searchInput"
            type="text"
            name="name"
            id="name"
            placeholder="(Optional) Enter category or name: Steakhouse, Cocktails, TGI Fridays, Starbucks..."
            onInput={onInput}
          />
          <button
            className="searchButton"
            type="text"
            name="name"
            id="name"
            onClick={(e) => {
              if (e.target.id === "location") {
                getApiData(e.target.value, name);
              }
              if (e.target.id === "name") {
                getApiData(location, e.target.value);
              }
            }}
          >
            Search
          </button>
        </span>
      </div>
    </>
  );
};

export default Search;
