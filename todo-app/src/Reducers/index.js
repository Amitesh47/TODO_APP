import { combineReducers } from "redux";
import errorReducers from "./ErrorReducers/ErrorReducers";
import userAlreadyExistsReducer from "./UserExistReducer/UserExistReducers";
import successfulRegistrationReducer from "./SuccessfulRegistrationReducers/SuccessfulRegistrationReducer";
import loginReducers from "./LoginReducers/LoginReducers";
import userTaskReducers from "./UserTaskReducers/UserTaskReducers";

const combinedReducers = combineReducers({
  error: errorReducers,
  userAlreadyExists: userAlreadyExistsReducer,
  registrationSuccess: successfulRegistrationReducer,
  loginDetails: loginReducers,
  userTasksDetails: userTaskReducers,
});

export default combinedReducers;
