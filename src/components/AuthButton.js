import React from "react";
import { Link } from "react-router-dom";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const AuthButton = () => {
  return (
    <>
      <li className="navbar-nav ml-auto">
        <Link to="/register" className="nav-item">
          <FontAwesomeIcon icon={faSignOutAlt} />
          Signup
        </Link>
      </li>
    </>
  );
};

export default AuthButton;
