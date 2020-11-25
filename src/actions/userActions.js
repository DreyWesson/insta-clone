import { actionTypes } from "./actionTypes";

export const setUser = (data) => {
  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_USER, user: data?.user });
};
