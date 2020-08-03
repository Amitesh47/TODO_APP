import {
 SUCCESS
} from "./constants";

const registrationReducers = (state = false, action) => {
  switch (action.type) {
    case SUCCESS:
      return true;

    default:
      return state;
  }
};

export default registrationReducers;
