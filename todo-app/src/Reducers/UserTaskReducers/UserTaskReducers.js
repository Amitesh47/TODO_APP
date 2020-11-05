const userTaskReducers = (state = {}, { type, data }) => {
  switch (type) {
    case "FETCH_ALL_TASKS":
      return data;
    default:
      return state;
  }
};

export default userTaskReducers
