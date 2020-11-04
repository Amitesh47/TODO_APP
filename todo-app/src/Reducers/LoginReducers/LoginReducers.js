
const loginReducers = (state = {}, { type, phone }) => {
  let initialState = {}
  switch (type) {
    case "LOGIN_SUCCESS":
      initialState.loginStatus = 'success';
      initialState.phone = phone;
      return initialState;

    case "LOGIN_FAILED":
      initialState.loginStatus = 'failed';
      initialState.phone = null;
      return initialState;

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};

export default loginReducers;
