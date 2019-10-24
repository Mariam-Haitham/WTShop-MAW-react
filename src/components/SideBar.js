import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../redux/actions";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light green lighten-3 "
        style={{ width: 1280, marginLeft: -15 }}
      >
        <Link to="/items" className="nav-brand" style={{ color: "black" }}>
          Green House
        </Link>

        <button
          className="navbar-toggler toggler-example"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="dark-blue-text">
            <i className="fas fa-bars fa-1x"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav mr-auto">
            {!this.props.user && (
              <Link
                to="/register"
                className="nav-item"
                style={{ color: "black", marginLeft: 15 }}
              >
                Register
              </Link>
            )}

            <Link
              to="/profile"
              className="nav-item"
              style={{ color: "black", marginLeft: 15 }}
            >
              profile
            </Link>
            <Link
              to="/checkout"
              className="nav-item"
              style={{ color: "black", marginLeft: 15 }}
            >
              Checkout
            </Link>

            {this.props.user && (
              <li className="nav-item">
                <a
                  style={{ color: "red", marginLeft: 15 }}
                  onClick={() => this.props.logout()}
                >
                  logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

const mapDispatchToProps = dispatch => ({
  logout: (userData, history) => dispatch(logout(userData, history))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
