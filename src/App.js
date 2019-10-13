import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import ItemsList from "./components/ItemsList";
import ItemDetail from "./components/ItemDetail";

class App extends Component {
  getView = () => {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Route path="/item/:itemID" component={ItemDetail} />
          <Route path="/items" component={ItemsList} />
          <Redirect to="/items" />
        </Switch>
      );
    }
  };
  render() {
    return <div className="content col-10">{this.getView()}</div>;
  }
}

export default App;
