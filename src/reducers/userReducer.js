import { actionTypes } from "../actions/actionTypes";

export const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  console.log(` 💪 ${action.type} ACTION 💪`, action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
