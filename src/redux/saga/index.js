import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* mySaga() {
  yield put("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;