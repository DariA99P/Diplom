import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// sagas

import { saga as mainPageSaga } from '../pages/View/neuroDrawingComponent/redux/sagas';
import { saga as authSaga } from '../pages/View/Auth/reducer/sagas';

// reducers
import mainPage from '../pages/View/neuroDrawingComponent/redux/reducer';
import auth from '../pages/View/Auth/reducer/index';
import { IAuthShape, IReducerShape } from '../pages/Models/interfaces';
export interface RootState {
  mainPage: IReducerShape;
  auth: IAuthShape;
}
export const reducer = combineReducers<RootState>({
  mainPage,
  auth,
});

export function* saga() {
  yield all([mainPageSaga(), authSaga()]);
}
