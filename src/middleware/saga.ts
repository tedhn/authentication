import { LOGIN_REQUEST } from "../store/action/actions";

import { takeLatest, put } from "redux-saga/effects";
import { callApi } from "./api";

function* login(action: any) {
  const { payload, types } = action;

  try {
    const response = yield callApi(payload);

    if (!!response.token) {
      yield put({ type: types[1], token: response.token });
    } else {
      yield put({ type: types[2], error: response.error });
    }
  } catch (e) {
    yield put({ type: types[2], error: e });
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
