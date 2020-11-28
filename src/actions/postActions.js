import { actionTypes } from "./actionTypes";

export const setPosts = (data) => {
  // console.log(data);
  return (dispatch, getState) =>
    dispatch({ type: actionTypes.SET_POSTS, posts: data });
};
