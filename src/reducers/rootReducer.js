import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import { openReducer } from "./modalReducer";

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  openReducer,
});

export default rootReducer;
