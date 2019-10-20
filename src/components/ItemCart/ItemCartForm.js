import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
//Actions
import { removeCart } from "../../redux/actions";

class ItemCartForm extends Component {
  render() {
    const { cartItem } = this.props;
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
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cartState.cart
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
