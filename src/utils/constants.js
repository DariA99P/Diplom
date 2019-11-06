// Sample values just to show how to export files. Avoid using export default in this file
// export const CONST_A = 'A';
// export const CONST_B = 'B';

export const SIDEBAR_BACKEND_URL = window.ENV ? window.ENV.SIDEBAR_BACKEND_URL : '';

export const SIDEBAR_ENABLED = window.ENV ? window.ENV.SIDEBAR_ENABLED : false;

export const MS_BACKEND_URL = (window && window.ENV
  && window.ENV.MS_BACKEND_URL) || '';

export const RAYGUN_API_KEY = (window && window.ENV
  && window.ENV.RAYGUN_API_KEY) || '';

export const RAYGUN_ENABLE_CRASH_REPORT = (window && window.ENV
  && window.ENV.RAYGUN_ENABLE_CRASH_REPORT) || false;

export const RAYGUN_ENABLE_USER_MONITORING = (window && window.ENV
  && window.ENV.RAYGUN_ENABLE_USER_MONITORING) || false;

export const CENTRIK_ACCESS_URL = (window && window.ENV
  && window.ENV.CENTRIK_ACCESS_URL) || '';

export const CENTRIK_ACCIDENT_WORKFLOW_ID = (window && window.ENV
  && window.ENV.CENTRIK_ACCIDENT_WORKFLOW_ID) || '';

export const CENTRIK_INCIDENT_WORKFLOW_ID = (window && window.ENV
  && window.ENV.CENTRIK_INCIDENT_WORKFLOW_ID) || '';
