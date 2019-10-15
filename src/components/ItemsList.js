import React from "react";
import { connect } from "react-redux";

// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";
import Searchbar from "./SearchBar";

class ItemsList extends React.Component {
  render() {
    const allItems = this.props.filteredItems.map(item => (
      <ItemCard key={item.title} item={item} />
    ));
    return (
      <div className="container">
        <Searchbar />
        <div className="row">{this.props.loading ? <Loading /> : allItems}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.rootList.loading,
  items: state.rootList.items,
  filteredItems: state.rootList.filteredItems
});

export default connect(mapStateToProps)(ItemsList);
