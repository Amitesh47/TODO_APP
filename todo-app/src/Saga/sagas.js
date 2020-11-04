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
    password: loginDetails.password
  });
  if (status === 200) {
    const { loginStatus, phone } = data;
    if (loginStatus) {
      return yield put({ type: "LOGIN_SUCCESS", phone });
    }
    return yield put({ type: "LOGIN_FAILED" });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery("REGISTER_USER", registerUserCall),
    takeEvery("LOGIN", loginCallApi),
  ]);
}
