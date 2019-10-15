import React from "react";
import { Redirect, Link } from "react-router-dom";

// Components
import AuthButton from "./AuthButton";

const NavBar = () => {
  /**
   * Don't commit dead code
   */
  // onclick = () => {
  //   return <Link to="/register" />;
  // };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        style={{ backgroundColor: "#201612", height: "40px" }}
      >
        <div>
          <AuthButton />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
