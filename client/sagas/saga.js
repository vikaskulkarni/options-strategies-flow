import { takeLatest, put, call } from "redux-saga/effects";
import request from "../utils/request";
import { ADD_USER, addUserAsyncAction } from "../actions/addUser";
import { GET_IP, getIPSuccess, getIPFail } from "../actions/getIP";

const IP_LOOKUP = "https://ipapi.co/json/";

function* getIP() {
  try {
    console.log();
    const ipDetails = yield call(request, IP_LOOKUP);
    yield put(getIPSuccess(ipDetails || {}));
  } catch (err) {
    console.log(err);
    yield put(getIPFail(ip.err));
  }
}

function* addUserAsync(action) {
  yield put(addUserAsyncAction(action.user));
}

export function* watchSagas() {
  yield takeLatest(ADD_USER, addUserAsync);
  yield takeLatest(GET_IP, getIP);
}
