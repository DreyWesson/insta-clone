import { actionTypes } from "../actions/actionTypes";

export const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default postReducer;
