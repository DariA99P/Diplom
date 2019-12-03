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
  RAYGUN_API_KEY: '',
  RAYGUN_ENABLE_CRASH_REPORT: false,
  RAYGUN_ENABLE_USER_MONITORING: false,
  CENTRIK_ACCESS_URL: 'https://vistajet-test.centrik.net/Management/Workflow/WorkflowDetail.aspx',
  CENTRIK_ACCIDENT_WORKFLOW_ID: '6a2219a9-84cd-4b8d-ae5e-14ef25478cdb',
  CENTRIK_INCIDENT_WORKFLOW_ID: '0c81bc81-715d-49aa-ace7-5762a81429e3',
  SUPPORT_URL: 'https://jira.vistajet.local/servicedesk/customer/portal/2',
};
