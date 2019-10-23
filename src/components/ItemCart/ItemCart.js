import { connect } from "react-redux";
import React, { Component } from "react";

// Component
import ItemCartForm from "./ItemCartForm";

//actions
import { checkout } from "../../redux/actions";

class ItemCart extends Component {
  render() {
    console.log("cart");
    console.log(this.props.cart);
    let cart = this.props.cart;
    let cartItems;
    if (cart) {
      cartItems = cart.map((cartItem, index) => (
        <ItemCartForm cartItem={cartItem} key={index} />
      ));
    }

    return (
      <div className="card text-white bg-light container mt-5">
        {cartItems}
        <button full danger onClick={() => this.props.checkout()}>
          {cart.total}
          <p>Checkout</p>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.rootCart.cart
});

const mapDispatchToProps = dispatch => {
  return {
    checkout: () => dispatch(checkout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCart);
