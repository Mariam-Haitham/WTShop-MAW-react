import React, { Component } from "react";

// Components
import Loading from "./Loading";
import { connect } from "react-redux";

//actions
import * as actionCreators from "../redux/actions/index";

class ItemDetail extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.itemID);
  }
  render() {
    if (!this.props.item) {
      return <Loading />;
    } else {
      const item = this.props.item;
      const itemName = `${item.title}`;
      return (
        <div className="item">
          <div>
            <h3>{itemName}</h3>
            <img
              src={item.image}
              className="img-thumbnail img-fluid"
              alt={itemName}
            />
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    item: state.itemState.item
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getItem: itemID => dispatch(actionCreators.fetchItemDetail(itemID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
