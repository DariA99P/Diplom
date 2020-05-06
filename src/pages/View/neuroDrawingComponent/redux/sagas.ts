import { all, takeLatest, call, delay, put } from 'redux-saga/effects';
import * as actions from './actions';
import { getUsersApi, processDrawingAPI } from '../../../../api';
import { message } from 'antd';

function* processDrawingSaga(data) {
  try {
    const typeFigure = yield call(processDrawingAPI, data.payload);
    yield delay(2000);
    yield put(
      actions.processDrawing.done({
        result: true,
        params: null,
      }),
    );
  } catch (error) {
    yield put(
      actions.processDrawing.failed({
        error,
        params: null,
      }),
    );
  }
}

function* getUsers() {
  try {
    const result = yield call(getUsersApi);
    if (result.data.error) {
      message.error(result.data.error);
    } else {
      yield put(
        actions.processDrawing.done({
          result: result.data,
          params: null,
        }),
      );
    }
  } catch (error) {
    message.error('Service is unavailable');
    yield put(
      actions.processDrawing.failed({
        error,
        params: null,
      }),
    );
  }
}

export function* saga() {
  yield all([
    takeLatest(actions.processDrawing.started, processDrawingSaga),
    takeLatest(actions.getUsersInfo.started, getUsers),
  ]);
}
