import { actionTypes } from "../actions/actionTypes";

export const initialState = {
  posts: [],
};

const authReducer = (state = initialState, action) => {
  console.log(` 💪 ${action.type} ACTION 💪`, action);
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return {
        ...state,
        auth: action.auth,
      };
    default:
      return state;
  }
};

export default authReducer;
