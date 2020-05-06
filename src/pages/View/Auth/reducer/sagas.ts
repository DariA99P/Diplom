import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import { loginUser, registerUser } from '../../../../api';
import { message } from 'antd';
import history from '../../../../config/history';
import { IAuthUserSchema } from '../../../Models/interfaces';

function* registerNewUser(info) {
  try {
    const result = yield call(registerUser, info.payload);
    if (result.data.error) {
      message.error(result.data.error);
      yield put(
        actions.userSubmitRegisterForm.failed({
          params: null,
          error: null,
        }),
      );
    } else {
      yield put(
        actions.userSubmitRegisterForm.done({
          params: null,
          result: result.data,
        }),
      );
      history.push('/');
    }
    console.log(result);
  } catch (e) {
    message.error('Service is unavailable');
    yield put(
      actions.userSubmitRegisterForm.failed({
        params: null,
        error: null,
      }),
    );
  }
}

function* signIn(loginInfo) {
  try {
    const variables: IAuthUserSchema = {
      email: loginInfo.payload.email || null,
      password: loginInfo.payload.password || null,
    };
    const result = yield call(loginUser, variables);
    if (result.data.error) {
      message.error(result.data.error);
    } else {
      history.push('/mainPage');
      yield put(
        actions.userLogsIn.done({
          result: result.data,
          params: null,
        }),
      );
    }
  } catch (error) {
    message.error('Service is unavailable');
    yield put(
      actions.userLogsIn.failed({
        error,
        params: null,
      }),
    );
  }
}

export function* saga() {
  yield all([
    takeLatest(actions.userSubmitRegisterForm.started, registerNewUser),
    takeLatest(actions.userLogsIn.started, signIn),
  ]);
}
