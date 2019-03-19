import React from 'react';
import ReactDOM from 'react-dom';

import Keycloak from 'keycloak-js';

import App from './App';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

const keycloak = Keycloak();

keycloak.init({
  flow: 'implicit', onLoad: 'check-sso', checkLoginIframeInterval: 1, checkLoginIframe: false,
}).success((authenticated) => {
  if (authenticated) {
    store.dispatch({ type: 'LOGIN', payload: { ...keycloak } });
    ReactDOM.render(React.createElement(App), document.getElementById('root'));
    registerServiceWorker();
  } else {
    keycloak.login();
  }
});
