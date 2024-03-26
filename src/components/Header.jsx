import { Link } from "react-router-dom";
import { IoIosRestaurant } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="header">
        <IoIosRestaurant
          className="logo"
          style={{
            color: "#f5b180",
          }}
        />
        <h1>Restaurant Finder</h1>

        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="links">Home</button>
        </Link>

        <Link to="/account" style={{ textDecoration: "none" }}>
          <button className="links">Account</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
