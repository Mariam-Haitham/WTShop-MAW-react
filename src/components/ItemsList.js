import React from "react";
import { connect } from "react-redux";

// Components
import Loading from "./Loading";
import ItemCard from "./ItemCard";

import { fetchItems } from "../redux/actions";

import Searchbar from "./SearchBar";

class ItemsList extends React.Component {
  /**
   * Remove unused state - switch to stateless component
   */
  state = { collapsed: false };

  componentDidMount() {
    /**
     * Fetch in the index
     */
    this.props.fetchItems();
  }

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
  items: state.rootList.items,
  filteredItems: state.rootList.filteredItems,
  loading: state.rootList.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
