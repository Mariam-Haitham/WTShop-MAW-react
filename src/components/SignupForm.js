import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from "react";

//actions
import { signup } from "../redux/actions";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="container">
        <div
          className="card"
          style={{
            width: 900,
            marginLeft: 170,
            backgroundImage:
              "url(https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
            backgroundRepeat: "no-repeat",
            backgroundSize: 900
          }}
        >
          <div className="card-body">
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className="form-group my-3">
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
  signup: (userData, history) => dispatch(signup(userData, history))
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
