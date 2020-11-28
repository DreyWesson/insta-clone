import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import { openReducer, openReducerTwo } from "./modalReducer";
// import {  } from "./modalReducerTwo";

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  openReducer,
});

export default rootReducer;
