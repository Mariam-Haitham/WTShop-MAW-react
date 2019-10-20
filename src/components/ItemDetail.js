import React, { Component } from "react";
import { connect } from "react-redux";

//components
import Loading from "./Loading";

class ItemDetail extends Component {
  render() {
    const id = this.props.match.params.itemID;
    const item = this.props.items.find(i => i.id === parseInt(id));

    if (!item) return <Loading />;
    return (
      <div
        className="card contain bg-light "
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
          alt={item.title}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: " cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            minHeight: "20px"
          }}
        />
        <div className="card-body">
          <h5 className="card-title">Item: {item.title}</h5>
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

const mapStateToProps = state => {
  return {
    items: state.rootList.items
  };
};

export default connect(mapStateToProps)(ItemDetail);
