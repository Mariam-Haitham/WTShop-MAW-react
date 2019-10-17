import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signup } from "../redux/actions";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event, type) => {
    event.preventDefault();
    this.props.signup(this.state, type);
  };

  render() {
    const { username, password } = this.state;
    const type = this.props.match.url.substring(1);
    return (
      <div className="container">
        <div className="card" style={{ marginLeft: 270 }}>
          <div className="card-body">
            <form onSubmit={event => this.handleSubmit(event, type)}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Signup
              </button>
              <Link to="/login" className="btn btn-link my-2 my-sm-0">
                I already have an account
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData, type) => dispatch(signup(userData, type))
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
