/*
Environment variables configuration file.
To add new values just add a new line with the key:value.
To call this value use: window.ENV.YOUR_ENV_VAR (window.ENV && window.ENV.YOUR_ENV_VAR)
This file will be replaced according to DevOps environment configuration and should not be imported
*/

window.ENV = {
  MS_ENVIRONMENT: 'DEV', // possibly environments: DEV, QA, UAT, DEMO, PROD
  MS_BACKEND_URL: 'http://localhost:8081',
  SIDEBAR_BACKEND_URL: 'http://localhost:4000',
  SIDEBAR_ENABLED: false,
};
