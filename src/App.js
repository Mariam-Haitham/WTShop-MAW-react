import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import Signup from "./components/SignupForm";
import ItemsList from "./components/ItemsList";
import ItemDetail from "./components/ItemDetail";

class App extends Component {
  getView = () => {
    if (this.props.loading) return <Loading />;

    return (
      <Switch>
        <Route path="/register" component={Signup} />

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
