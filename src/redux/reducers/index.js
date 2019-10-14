import { combineReducers } from "redux";

// Reducers
import listReducer from "./itemsList";
import itemReducer from "./itemDetail";
import authReducer from "./auth";

export default combineReducers({
  rootList: listReducer,
  itemState: itemReducer,
  user: authReducer
});
