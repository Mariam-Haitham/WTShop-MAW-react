import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

//components
import Loading from "./Loading";
import Default from "../default.jpg";

//actions
import { fetchProfile, logout } from "../redux/actions";

class Profile extends Component {
  componentDidMount = async () => {
    if (this.props.user) await this.props.fetchProfile();
  };

  render() {
    if (!this.props.user) return <Redirect to="/register" />;

    if (this.props.loading) return <Loading />;

    const userInfo = this.props.user;
    const profileInfo = this.props.profile;

    let image = profileInfo.image;
    if (!image) image = Default;

    let pastOrders = [];

    profileInfo.past_orders.map(order => {
      pastOrders.push(
        <li
          key={order.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {order.date}
          <span className="badge badge-primary badge-pill">{order.total}</span>
        </li>
      );
    });

    return (
      <div>
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
                href="/editProfile"
                className="btn btn-primary"
                style={{ marginRight: "20px" }}
              >
                Edit my profile
              </a>
              <button className="btn btn-danger" onClick={this.props.logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <h2>
          <br />
          Previous Orders:
        </h2>
        <div>
          <ul className="list-group"> {pastOrders}</ul>
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

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
