import { combineReducers } from "redux";

// Reducers
import listReducer from "./itemsList";
import authReducer from "./auth";
import cartReducer from "./cart";
import profileReducer from "./profile";

export default combineReducers({
  rootList: listReducer,
  rootAuth: authReducer,
  rootCart: cartReducer,
  rootProfile: profileReducer
});
