import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import Profile from "./components/Profile";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import ItemsList from "./components/ItemsList";
import ItemDetail from "./components/ItemDetail";
import EditProfile from "./components/EditProfile";
import ItemCart from "./components/ItemCart/ItemCart";

class App extends Component {
  getView = () => {
    if (this.props.loading) return <Loading />;

    return (
      <Switch>
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Login} />

        <Route path="/profile" component={Profile} />
        <Route path="/editProfile" component={EditProfile} />
        <Route path="/checkout" component={ItemCart} />

        <Route path="/items/:itemID" component={ItemDetail} />
        <Route path="/items" component={ItemsList} />

        <Redirect to="/items" />
      </Switch>
    );
  };

  render() {
    return (
      <div className="content col-10">
        <NavBar />
        {this.getView()}
      </div>
    );
  }
}

export default App;
