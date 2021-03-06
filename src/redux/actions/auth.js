import * as actionTypes from "./actionTypes";

import instance from "./instance";

import axios from "axios";
import jwt_decode from "jwt-decode";

export const checkForExpiredToken = () => {
  return dispatch => {
    const token = localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      console.log("check for expired token");
      console.log((user.exp - currentTime) / 60);

      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const login = (userData, history) => {
  return async dispatch => {
    try {
      let response = await axios.post("http://127.0.0.1:8000/login/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.access);
      setAuthToken(user.access);
      dispatch(setCurrentUser(decodedUser));
      history.replace("/items");
    } catch (error) {
      console.log("login error");
      console.error(error);
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      await axios.post("http://127.0.0.1:8000/register/", userData);
      dispatch(login(userData, history));
    } catch (error) {
      console.log("signup error");
      console.error(error.response.data);
    }
  };
};

export const logout = history => {
  setAuthToken();

  return setCurrentUser();
};
