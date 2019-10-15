import React from "react";
import { Link } from "react-router-dom";

function ItemCard(props) {
  const item = props.item;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card" style={{ height: "20rem" }}>
        <Link to={`/items/${item.id}`}>
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={item.image}
              alt="Just an image!!"
            />
          </div>
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <span>{item.title}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
