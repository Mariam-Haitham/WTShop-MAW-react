import React from "react";
import { Link } from "react-router-dom";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const AuthButton = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <Link to="/register" className="nav-item">
        <span className="nav-link">
          <FontAwesomeIcon icon={faSignOutAlt} />
          singup
        </span>
      </Link>
    </ul>
  );
};

export default AuthButton;
