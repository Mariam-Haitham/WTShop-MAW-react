import { combineReducers } from "redux";

// Reducers
import listReducer from "./itemsList";
import authReducer from "./auth";

export default combineReducers({
  rootList: listReducer,
  user: authReducer
});
