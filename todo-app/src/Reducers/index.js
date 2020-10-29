import { combineReducers } from "redux";
import errorReducers from "./ErrorReducers/ErrorReducers";
import userAlreadyExistsReducer from './UserExistReducer/UserExistReducers'

const combinedReducers = combineReducers({
  error: errorReducers,
  userAlreadyExists: userAlreadyExistsReducer,
});

export default combinedReducers;
