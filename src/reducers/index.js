import { combineReducers } from 'redux';
import keycloak from './keycloak';

export default combineReducers({
  nook: () => ({}),
  keycloak,
});
