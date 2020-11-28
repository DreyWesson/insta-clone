const actionTypes = {
  SET_USER: "SET_USER",
  SET_POSTS: "SET_POSTS",
  SET_AUTH: "SET_AUTH",
  SET_OPEN: "SET_OPEN",
  SET_OPEN_SIGN_IN: "SET_OPEN_SIGN_IN",
  SET_PASSWORD: "SET_PASSWORD",
  SET_EMAIL: "SET_EMAIL",
  SET_USERNAME: "SET_USERNAME",
};

const chooseAction = (data, actionType) => {
  switch (actionType) {
    // POST ACTION
    case "SET_POSTS":
      return (dispatch, getState) =>
        dispatch({ type: actionTypes.SET_POSTS, posts: data });
    // USER ACTIONS
    case "SET_USER":
      return (dispatch, getState) =>
        dispatch({ type: actionTypes.SET_USER, user: data });

    case "SET_USERNAME":
      return (dispatch, getState) =>
        dispatch({ type: actionTypes.SET_USERNAME, username: data });
    case "SET_EMAIL":
      return (dispatch, getState) =>
        dispatch({ type: actionTypes.SET_EMAIL, email: data });
    case "SET_PASSWORD":
      return (dispatch, getState) =>
        dispatch({ type: actionTypes.SET_PASSWORD, password: data });
    // MODAL ACTIONS
    case "SET_OPEN":
      return (dispatch, getState) =>
        dispatch({ type: actionTypes.SET_OPEN, open: data });
    case "SET_OPEN_SIGN_IN":
      return (dispatch, getState) =>
        dispatch({
          type: actionTypes.SET_OPEN_SIGN_IN,
          openSignIn: data,
        });
    default:
      break;
  }
};

export { actionTypes, chooseAction };
