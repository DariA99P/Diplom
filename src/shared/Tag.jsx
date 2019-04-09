import React from 'react';

import { Tag } from 'antd';

import defineEnvironment from '../utils/environmentDefinition';

function TagComponent() {
  const {
    color: envColor,
    label: envLabel,
  } = defineEnvironment(window && window.ENV && window.ENV.MS_ENVIRONMENT);

  if (envLabel !== 'PROD') {
    return (
      <Tag
        style={{ marginLeft: '16px', cursor: 'context-menu' }}
        color={envColor}
      >
        {envLabel}
      </Tag>
    );
  }
  return null;
}
export default TagComponent;
