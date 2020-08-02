import {
  NO_ERROR,
  PASSWORD_ERROR,
  PHONE_NO_LENGTH_ERROR,
  VALID_PHN_NO_ERROR,
} from "./constants";

const errorReducers = (state = null, action) => {
  switch (action.type) {
    case NO_ERROR:
      return 'No Error';

    case PASSWORD_ERROR:
      return "Password too Short";

    case PHONE_NO_LENGTH_ERROR:
      return "Phone number cannot be greater than 10";

    case VALID_PHN_NO_ERROR:
      return "Enter a Valid Phone Number";

    default:
      return state;
  }
};

export default errorReducers;
