import React, { useEffect } from "react";
import { getApiData } from "./secrets";
import Interface from "./components/Interface";
import "./css/App.css";

const App = () => {
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Restaurants"
        onInput={getApiData}
      />
      <Interface />
    </>
  );
};

export default App;
