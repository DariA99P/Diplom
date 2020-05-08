import { all, takeLatest, call, delay, put, select } from 'redux-saga/effects';
import * as actions from './actions';
import {
  getUsersApi,
  processDrawingAPI,
  removeImageApi,
  saveImageApi,
  subscribersToUsersApi,
} from '../../../../api';
import { message } from 'antd';
import { getUserInfoSelect } from './selectors';
import { UserInfo } from '../../../Models/interfaces';
import moment from 'moment';

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

function* saveImageToDB({ payload }) {
  try {
    const user: UserInfo = yield select(getUserInfoSelect);
    const variables = {
      fileName: payload,
      creator: `${user.lastName} ${user.firstName}`,
      dateOfCreation: moment().valueOf(),
    };
    const { data } = yield call(saveImageApi, user.id, variables);
    message.success('Saving Successfully');
    yield put(
      actions.saveImageToDB.done({
        params: null,
        result: { ...user, files: data },
      }),
    );
  } catch (error) {
    message.error('Saved failed');
    yield put(
      actions.saveImageToDB.failed({
        error,
        params: null,
      }),
    );
  }
}

function* removeImageFromDB({ payload }) {
  try {
    const user: UserInfo = yield select(getUserInfoSelect);
    const { data } = yield call(removeImageApi, payload, user.id);
    message.success('Removing successful');
    yield put(
      actions.removeImageFromDB.done({
        params: null,
        result: { ...user, files: data },
      }),
    );
  } catch (error) {
    message.error('Removing failed');
    yield put(
      actions.removeImageFromDB.failed({
        error,
        params: null,
      }),
    );
  }
}

function* subscribersToUsers({ payload }) {
  try {
    const user: UserInfo = yield select(getUserInfoSelect);
    console.log([
      ...user.subscriptionsIds,
      ...payload,
    ]);
    const { data } = yield call(subscribersToUsersApi, user.id, [
      ...user.subscriptionsIds,
      ...payload,
    ]);

    yield put(
      actions.subscribersToUsers.done({
        params: null,
        result: { ...user, subscriptionsIds: data },
      }),
    );
  } catch (error) {
    message.error('Failed');
    yield put(
      actions.subscribersToUsers.failed({
        error,
        params: null,
      }),
    );
  }
}
export function* saga() {
  yield all([
    takeLatest(actions.processDrawing.started, processDrawingSaga),
    takeLatest(actions.saveImageToDB.started, saveImageToDB),
    takeLatest(actions.removeImageFromDB.started, removeImageFromDB),
    takeLatest(actions.subscribersToUsers.started, subscribersToUsers),
  ]);
}
