import React from 'react';
import ReactDOM from 'react-dom';

import Keycloak from 'keycloak-js';

import App from './App';
import store from './redux/store';

import {
  RAYGUN_API_KEY,
  RAYGUN_ENABLE_CRASH_REPORT,
  RAYGUN_ENABLE_USER_MONITORING,
} from './utils/constants';

const keycloak = Keycloak();

keycloak.init({
  flow: 'implicit', onLoad: 'check-sso', checkLoginIframeInterval: 1, checkLoginIframe: false,
}).success((authenticated) => {
  if (authenticated) {
    store.dispatch({ type: 'LOGIN', payload: { ...keycloak } });
    // start Raygun monitoring
    window.rg4js('apiKey', RAYGUN_API_KEY);
    window.rg4js('enableCrashReporting', RAYGUN_ENABLE_CRASH_REPORT);
    window.rg4js('enablePulse', RAYGUN_ENABLE_USER_MONITORING);

    const { tokenParsed } = keycloak;

    window.rg4js('setUser', {
      identifier: tokenParsed.preferred_username,
      isAnonymous: false,
      email: tokenParsed.email,
      firstName: tokenParsed.given_name,
      fullName: `${tokenParsed.given_name} ${tokenParsed.family_name}`,
    });

    // start React APP
    ReactDOM.render(
      React.createElement(App),
      document.getElementById('root'),
    );
  } else {
    keycloak.login();
  }
});

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
