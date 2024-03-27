import { getApiData } from "../dataController/fetching";
const Search = () => {
  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <div className="searchBar">
        {/* <form onSubmit={onSubmit}> */}
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Restaurants"
          onInput={getApiData}
        />

        {/* <button className="searchButton">Search</button> */}
        {/* </form> */}
      </div>
    </>
  );
};

export default Search;
