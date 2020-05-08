import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import {
  getOrganizationListApi,
  getUserInfoApi,
  loginUser,
  registerUser,
} from '../../../../api';
import { message } from 'antd';
import history from '../../../../config/history';
import { IAuthUserSchema } from '../../../Models/interfaces';

function* initializeData() {
  try {
    const id = localStorage.getItem('idUser');
    const { data } = yield call(getUserInfoApi, id);
    const { data: list } = yield call(getOrganizationListApi);
    yield put(
      actions.initializeData.done({
        params: null,
        result: {
          user: data.user,
          organizationsList: list,
          listUsers: data.listUsers,
        },
      }),
    );
  } catch (error) {
    yield put(
      actions.initializeData.failed({
        params: null,
        error,
      }),
    );
  }
}

function* getOrganizationsList() {
  try {
    const { data } = yield call(getOrganizationListApi);
    yield put(
      actions.getOrganizationsList.done({
        params: null,
        result: data,
      }),
    );
  } catch (error) {
    yield put(
      actions.getOrganizationsList.failed({
        params: null,
        error,
      }),
    );
  }
}

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
      localStorage.setItem('idUser', result.data.id);
      yield put(
        actions.userLogsIn.done({
          result: true,
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
    takeLatest(actions.initializeData.started, initializeData),
    takeLatest(actions.getOrganizationsList.started, getOrganizationsList),
    takeLatest(actions.userSubmitRegisterForm.started, registerNewUser),
    takeLatest(actions.userLogsIn.started, signIn),
  ]);
}
