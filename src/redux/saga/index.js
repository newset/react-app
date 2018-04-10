import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects'

function* mySaga() {
  yield take("USER_FETCH_REQUESTED", {test: 1});
}

export default mySaga;