import { combineReducers } from 'redux';

import communication from './communication';
import keycloak from './keycloak';

const appReducer = combineReducers({
  communication,
  keycloak,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
