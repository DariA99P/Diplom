const environmentInfo = {
  DEV: {
    label: 'DEV',
    color: 'blue',
  },
  QA: {
    label: 'QA',
    color: 'green',
  },
  UAT: {
    label: 'UAT',
    color: 'orange',
  },
  DEMO: {
    label: 'DEMO',
    color: 'purple',
  },
  PROD: {
    label: 'PROD',
    color: '#fff',
  },
};

function getEnvironemntInfo(env) {
  return environmentInfo[env];
}

export default getEnvironemntInfo;
