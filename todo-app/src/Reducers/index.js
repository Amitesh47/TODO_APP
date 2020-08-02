import { combineReducers } from "redux";
import errorReducers from "./ErrorReducers/ErrorReducers";

const combinedReducers = combineReducers({
  error: errorReducers,
});

export default combinedReducers;
