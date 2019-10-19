import React from "react";

// Components
import AuthButton from "./AuthButton";

const NavBar = () => {
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
