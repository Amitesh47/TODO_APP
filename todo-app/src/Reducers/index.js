import { combineReducers } from "redux";
import errorReducers from "./ErrorReducers/ErrorReducers";
import registrationReducers from './RegistrationReducers/RegistrationReducers'

const combinedReducers = combineReducers({
  error: errorReducers,
  registrationSuccess:registrationReducers
});

export default combinedReducers;
