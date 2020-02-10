import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// sagas

import { saga as filtersSaga } from '../pages/preparationTasks/filters/redux/sagas';

// reducers
import communication from './reducers/communication';
import keycloak from './reducers/keycloak';
import filters from '../pages/preparationTasks/filters/redux/reducer';

export const reducer = combineReducers({
  communication,
  keycloak,
  filters,
});

export function* saga() {
  yield all([filtersSaga()]);
}
