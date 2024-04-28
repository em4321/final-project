import { Link } from "react-router-dom";
import { IoIosRestaurant } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="header">
        <IoIosRestaurant className="logo" />
        <h1>Restaurant Finder</h1>
        <div className="homeAndAccount">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="links">Home</button>
          </Link>

          <Link
            to="/account"
            style={{ textDecoration: "none", padding: "1rem" }}
          >
            <button className="links">Account</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
