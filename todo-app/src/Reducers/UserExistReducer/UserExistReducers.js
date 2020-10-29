const userExistReducer = (state = false, { type, value }) => {
  switch (type) {
    case "USER_EXISTS":
      return value;

    default:
      return state;
  }
};

export default userExistReducer;
