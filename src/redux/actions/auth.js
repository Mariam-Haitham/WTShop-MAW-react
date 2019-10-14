import { SET_CURRENT_USER } from "./actionTypes";

import axios from "axios";
import jwt_decode from "jwt-decode";

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

const setAuthToken = token => {
  return dispatch => {
    if (token) {
      axios.defaults.headers.common.Authorization = `jwt ${token}`;
      const decodedUser = jwt_decode(token);
      dispatch(setCurrentUser(decodedUser));
    } else {
      delete axios.defaults.headers.common.Authorization;
      dispatch(setCurrentUser());
    }
  };
};

export const auth = (userData, type) => {
  return async dispatch => {
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/${type}/`,
        userData
      );
      let user = await response.data;
      dispatch(setAuthToken(user.token));
    } catch (error) {
      console.log(error);
    }
  };
};
