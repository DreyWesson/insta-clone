import { actionTypes } from "./actionTypes";

export const setAuth = (data) => {
  // console.log(data);
  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_AUTH, posts: data });
};
