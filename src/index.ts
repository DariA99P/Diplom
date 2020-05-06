import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// const keycloak = Keycloak();
//
// keycloak
//   .init({
//     flow: 'implicit',
//     onLoad: 'check-sso',
//     checkLoginIframeInterval: true,
//     checkLoginIframe: false,
//   })
//   .success(authenticated => {
//     if (authenticated) {
//       store.dispatch({ type: 'LOGIN', payload: { ...keycloak } });
//       // start Raygun monitoring
//       rg4js()('apiKey', RAYGUN_API_KEY);
//       rg4js()('enableCrashReporting', RAYGUN_ENABLE_CRASH_REPORT);
//       rg4js()('enablePulse', RAYGUN_ENABLE_USER_MONITORING);
//
//       const { tokenParsed } = keycloak as any;
//
//       rg4js()('setUser', {
//         identifier: tokenParsed.preferred_username,
//         isAnonymous: false,
//         email: tokenParsed.email,
//         firstName: tokenParsed.given_name,
//         fullName: `${tokenParsed.given_name} ${tokenParsed.family_name}`,
//       });
//
//       // start React APP
//       ReactDOM.render(
//         React.createElement(App),
//         document.getElementById('root'),
//       );
//     } else {
//       keycloak.login();
//     }
//   });
//
// // Check if hot reloading is enable. If it is, changes won't reload the page.
// // This is related to webpack-dev-server and works on development only.
// if ((module as any).hot) {
//   (module as any).hot.accept();
// }
ReactDOM.render(React.createElement(App), document.getElementById('root'));
// const rg4js = () => (window as any).rg4js;
