import { all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

function* testSaga() {
  yield console.log('saga work');
}

export function* saga() {
  yield all([takeLatest(actions.testAction, testSaga)]);
}
