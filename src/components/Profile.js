import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//components
import Loading from "./Loading";
import Default from "../default.jpg";

class Profile extends Component {
  render() {
    if (!this.props.user) return <Redirect to="/register" />;

    if (this.props.loading) return <Loading />;

    const userInfo = this.props.user;
    const profileInfo = this.props.profile;

    let image = profileInfo.image;
    if (!image) image = Default;

    return (
      <div>
        <div className="card" style={{ marginTop: "50px" }}>
          <div className="card-header">Welcome {userInfo.username}</div>
          <div className="card-body">
            <h5 className="card-title">profile info </h5>
            <div className="card-text">
              <div className="image">
                <img
                  style={{
                    borderRadius: "50%",
                    width: "120px",
                    height: "100px"
                  }}
                  className="card-img-top img-fluid"
                  src={image}
                  alt="Hello, it is me!"
                />
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Full Name: </span>
                <span>{profileInfo.user.first_name} </span>
                <span>{profileInfo.user.last_name}</span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Email: </span>
                <span>{profileInfo.user.email} </span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Phone Number: </span>
                <span>{profileInfo.number} </span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Bio: </span>
                <span>{profileInfo.bio} </span>
              </div>
            </div>
            <a
              href="#"
              className="btn btn-primary"
              style={{ marginRight: "20px" }}
            >
              Edit my profile
            </a>
            <a href="#" className="btn btn-primary">
              logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user,
  profile: state.rootProfile.profile,
  loading: state.rootProfile.loading
});

export default connect(mapStateToProps)(Profile);
