// Sample values just to show how to export files. Avoid using export default in this file
// export const CONST_A = 'A';
// export const CONST_B = 'B';

const SIDEBAR_BACKEND_URL = window.ENV ? window.ENV.SIDEBAR_BACKEND_URL : '';
const SIDEBAR_ENABLED = window.ENV ? window.ENV.SIDEBAR_ENABLED : false;

export {
  SIDEBAR_BACKEND_URL,
  SIDEBAR_ENABLED,
};
