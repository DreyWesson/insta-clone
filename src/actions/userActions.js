import { actionTypes } from "./actionTypes";

const setUser = (data) => {
  // console.log(data);

  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_USER, user: data });
};

const setAuth = (data) => {
  // console.log(data);
  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_AUTH, auth: data });
};

const setUsername = (data) => {
  // console.log(data);
  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_USERNAME, username: data });
};

const setEmail = (data) => {
  // console.log(data);
  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_EMAIL, email: data });
};

const setPassword = (data) => {
  // console.log(data);
  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_PASSWORD, password: data });
};

export { setUser, setAuth, setUsername, setEmail, setPassword };
