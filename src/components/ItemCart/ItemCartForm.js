import { connect } from "react-redux";
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//actions
import { removeCart } from "../../redux/actions";

class ItemCartForm extends Component {
  Total = cart => {
    const total = cart.reduce((counter, item) => counter + item.item.price, 0);

    if (total) {
      return total;
    }
    return 0;
  };
  render() {
    const { cartItem } = this.props;
    console.log("I'M HEEEEREEEE");
    console.log(this.props.cart);
    return (
      <Container>
        <Row style={{ color: "black" }}>
          <Col>{cartItem.item.title}</Col>
          <Col>Quantity: {cartItem.quantity}</Col>
          <Col>Price: ${cartItem.item.price} </Col>
          <Col>
            <button onClick={() => this.props.removeCart(cartItem)} transparent>
              <img
                src="https://cdn3.iconfinder.com/data/icons/objects/512/Bin-512.png"
                className="card-img"
                alt="..."
                style={{ color: "white", fontSize: 10, width: 30, height: 30 }}
              />
            </button>
          </Col>
        </Row>
        <h1 style={{ color: "black" }}>Total:${this.Total(this.props.cart)}</h1>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.rootCart.cart
});

const mapDispatchToProps = dispatch => {
  return {
    removeCart: item => dispatch(removeCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemCartForm);
