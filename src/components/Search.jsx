import { getApiData } from "../dataController/fetching";
import { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState(" ");
  const [name, setName] = useState(" ");
  const onInput = (e) => {
    if (e.target.id === "location") {
      setLocation(e.target.value);
      getApiData(e.target.value, name);
    }
    if (e.target.id === "name") {
      setName(e.target.value);
      getApiData(location, e.target.value);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="location">Search by location:</label>
        <div className="searchBar">
          <input
            type="text"
            name="location"
            id="location"
            placeholder="London, New York, Berlin..."
            onInput={onInput}
          />
        </div>
        <label htmlFor="name">Search by name:</label>
        <div className="searchBar">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Côte, Starbucks, Five Guys..."
            onInput={onInput}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
