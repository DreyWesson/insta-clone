import { actionTypes } from "./actionTypes";

export const setOpen = (data) => {
  // console.log(data);
  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_OPEN, open: data });
};

export const setOpenSignIn = (data) => {
  // console.log(data);
  return (dispatch, getState) =>
    dispatch({
      type: actionTypes.SET_OPEN_SIGN_IN,
      openSignIn: data,
    });
};
