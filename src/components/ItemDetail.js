import { connect } from "react-redux";
import React, { Component } from "react";

//actions
import { addCart } from "../redux/actions";

//components
import Loading from "./Loading";
import CartButton from "./ItemCart/CartButton";

class ItemDetail extends Component {
  render() {
    const id = this.props.match.params.itemID;
    const item = this.props.items.find(i => i.id === parseInt(id));

    if (!item) return <Loading />;
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 my-5">
            <div
              className="card contain bg-light my-5 "
              style={{
                maxWidth: 500,
                maxHeight: 800,
                marginTop: 70,
                marginLeft: 50
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Item: {item.title}</h5>
                <p className="card-text">
                  description: <br></br> {item.description}
                </p>
                <p className="card-text">Price: {item.price}</p>
                <p className="card-text">quantity available: {item.quantity}</p>
                <button
                  full
                  danger
                  className="btn btn-outline-success"
                  onClick={() => this.props.addCart({ item, quantity: 1 })}
                >
                  Add To Cart
                </button>
                <CartButton />
              </div>
            </div>
          </div>
          <div className="col-6 my-5">
            <div className="card contain bg-light my-5 " style={{ width: 600 }}>
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: " cover",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  minHeight: "450px",
                  minWidth: "200px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.rootList.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCart: item => dispatch(addCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
