import { combineReducers } from "redux";

// Reducers
import listReducer from "./itemsList";
import itemReducer from "./itemDetail";

export default combineReducers({
  rootList: listReducer,
  itemState: itemReducer
});
