import { connect } from "react-redux";
import React, { Component } from "react";

//components
import Loading from "./Loading";

class OrderDetail extends Component {
  render() {
    if (this.props.loading) return <Loading />;

    const id = this.props.match.params.orderID;
    const order = this.props.profile.past_orders.find(
      i => i.id === parseInt(id)
    );

    let items = [];

    console.log(order);

    order.item_orders.map(item => {
      items.push(
        <tr key={item.item.id}>
          <td>{item.item.title}</td>
          <td>{item.item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.quantity * item.item.price}</td>
        </tr>
      );
    });
    return (
      <table className="table" style={{ marginTop: "60px" }}>
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Item Price</th>
            <th scope="col">Quantity </th>
            <th scope="col">Item Total</th>
          </tr>
        </thead>
        <tbody>
          {items}
          <tr>
            <td colspan="3">Total </td>
            <td>{order.total}$</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.rootAuth.user,
    profile: state.rootProfile.profile,
    loading: state.rootProfile.loading
  };
};

export default connect(mapStateToProps)(OrderDetail);
