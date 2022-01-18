import { combineReducers } from "redux";
import userReducer from "./userReducer";
import shoeReducer from "./shoeReducer";

const mainReducer = combineReducers({
  userReducer,
  shoeReducer,
});

export default mainReducer;
