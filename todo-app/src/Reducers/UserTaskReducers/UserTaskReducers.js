const userTaskReducers = (state = {}, { type, data }) => {
  let updateState = {};
  switch (type) {
    case "FETCH_ALL_TASKS":
    case "EDIT_TASK_SUCCESS":
      updateState = data;
      return updateState;
    default:
      return state;
  }
};

export default userTaskReducers;
