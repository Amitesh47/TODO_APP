import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import history from "../Routes/history"

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
    history.push("/registeredSuccess")
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

function* registrationCall() {
  yield takeEvery("REGISTRATION_CALL", callRegistrationApi);
}

function* registerUser() {
  yield takeEvery("REGISTER_USER", registerUserCall);
}

export default function* rootSaga() {
  yield all([registrationCall(), registerUser()]);
}
