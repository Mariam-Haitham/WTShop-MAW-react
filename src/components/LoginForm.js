import { connect } from "react-redux";
import React, { Component } from "react";

//actions
import { login } from "../redux/actions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="container ">
        <div
          className=" my-3"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/pfkbqzx/Green-House-Logo.png  )",
            backgroundRepeat: "no-repeat",
            backgroundSize: 200,
            width: 600,
            height: 500,
            marginLeft: 500
          }}
        ></div>
        <div
          className="card "
          style={{
            width: 500,
            marginLeft: 350,
            marginTop: -250
          }}
        >
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group ">
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

              <button type="submit" className="btn btn-primary ">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (userData, history) => dispatch(login(userData, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
