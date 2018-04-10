import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* mySaga() {
  yield put("USER_FETCH_REQUESTED", {test: 1});
}

export default mySaga;