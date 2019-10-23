import { connect } from "react-redux";
import React, { Component } from "react";

//actions
import { editProfile, fetchProfile } from "../redux/actions";

//components
import Loading from "./Loading";

class EditProfile extends Component {
  state = {
    user: { first_name: "", last_name: "", email: "" },
    number: "",
    bio: ""
  };

  componentDidMount = async () => {
    await this.props.fetchProfile();
    let profileInfo = this.props.profile;
    this.setState({
      user: {
        first_name: profileInfo.user.first_name,
        last_name: profileInfo.user.last_name,
        email: profileInfo.user.email
      },
      number: profileInfo.number,
      bio: profileInfo.bio
    });
    console.log(this.state);
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "first_name" || name === "last_name" || name === "email") {
      let user = { ...this.state.user };
      user[name] = value;
      this.setState({ user });
    } else this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.editProfile(this.state);
  };

  render() {
    if (this.props.loading) return <Loading />;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3 my-5">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={this.state.user.first_name}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={this.state.user.last_name}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={this.state.user.email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-group">
            <label>Bio</label>
            <input
              type="text"
              className="form-control"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user,
  profile: state.rootProfile.profile,
  loading: state.rootProfile.loading
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile()),
  editProfile: newProfile => dispatch(editProfile(newProfile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
