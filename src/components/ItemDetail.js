import React, { Component } from "react";

// Components
import Loading from "./Loading";
import { connect } from "react-redux";
//description, quantity, price
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
        <div
          class="card contain  bg-light "
          style={{
            maxWidth: 500,
            maxHeight: 500,
            marginTop: 30,
            marginLeft: 250
          }}
        >
          <img
            src={item.image}
            className="card-img-top"
            alt={itemName}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: " cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              minHeight: "20px"
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Item: {itemName}</h5>
            <p className="card-text">
              description: <br></br> {item.description}
            </p>
            <p className="card-text">Price: {item.price}</p>
            <p className="card-text">quantity available: {item.quantity}</p>
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
