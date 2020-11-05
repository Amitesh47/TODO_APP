import { put, all, takeEvery } from "redux-saga/effects";
import axios from "axios";

const callApi = async (url, postData = null) => {
  const response = postData
    ? await axios.post(url, postData).then()
    : await axios.get(url).then();
  return response;
};

function* callRegistrationApi(userDetails) {
  const { status } = yield callApi(
    "http://localhost:3333/apis/addUser",
    userDetails
  );
  if (status === 200) {
    yield put({ type: "USER_EXISTS", value: false });
    yield put({ type: "REGISTRATION_SUCCESS" });
  }
}

function* registerUserCall({ userDetails }) {
  const { data, status } = yield callApi(
    "http://localhost:3333/apis/allUsers",
    { phone: userDetails.phone }
  );
  if (status === 200) {
    const { validUser } = data;
    if (validUser) {
      return yield callRegistrationApi(userDetails);
    } else {
      yield put({ type: "REGISTRATION_FAILED" });
      return yield put({ type: "USER_EXISTS", value: true });
    }
  }
}

function* loginCallApi({ loginDetails }) {
  const { data, status } = yield callApi("http://localhost:3333/apis/login", {
    phone: loginDetails.phone,
    password: loginDetails.password,
  });
  if (status === 200) {
    const { loginStatus, phone } = data;
    if (loginStatus) {
      yield put({ type: "LOGIN_SUCCESS", phone });
      const { data, status } = yield callApi(
        "http://localhost:3333/apis/fetchAllTasks",
        {
          phone: loginDetails.phone,
        }
      );
      if (status === 200) {
        return yield put({
          type: "FETCH_ALL_TASKS",
          data,
        });
      }
    }
    return yield put({ type: "LOGIN_FAILED" });
  }
}

function* addNewTaskApiCall({ newTaskDetails }) {
  const { data, status } = yield callApi(
    "http://localhost:3333/apis/addNewTask",
    {
      userPhone: newTaskDetails.userPhone,
      taskCount: newTaskDetails.taskCount,
      taskList: newTaskDetails.taskList,
    }
  );
  if (status === 200) {
    return yield put({
      type: "FETCH_ALL_TASKS",
      data,
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery("REGISTER_USER", registerUserCall),
    takeEvery("LOGIN", loginCallApi),
    takeEvery("ADD_NEW_TASK", addNewTaskApiCall),
  ]);
}
