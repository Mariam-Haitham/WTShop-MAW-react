import { combineReducers } from "redux";
// Reducers
import listReducer from "./itemsList";
import authReducer from "./auth";
import cartReducer from "./cart";
export default combineReducers({
  rootList: listReducer,
  user: authReducer,
  cartState: cartReducer
});
