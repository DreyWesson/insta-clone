import { actionTypes } from "../actions/actionTypes";

export const initialState = {
  open: false,
  openSignIn: false,
};

const openReducer = (state = initialState, action) => {
  console.log(` 💪 ${action.type} ACTION 💪`, action);
  switch (action.type) {
    case actionTypes.SET_OPEN:
      return {
        ...state,
        open: action.open,
      };
    case actionTypes.SET_OPEN_SIGN_IN:
      return {
        ...state,
        openSignIn: action.openSignIn,
      };
    default:
      return state;
  }
};
// const openReducerTwo = (state = initialState, action) => {
//   console.log(` 💪 ${action.type} ACTION 💪`, action);
//   switch (action.type) {

//     default:
//       return state;
//   }
// };

export { openReducer };
