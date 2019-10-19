import { combineReducers } from "redux";

// Reducers
import listReducer from "./itemsList";
import authReducer from "./auth";
import profileReducer from "./profile";

export default combineReducers({
  rootList: listReducer,
  rootAuth: authReducer,
  rootProfile: profileReducer
});
