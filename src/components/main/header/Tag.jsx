import React from 'react';

import { Antd } from '@vj/vjcomponentslibrary';

import defineEnvironment from '../../../utils/environmentDefinition';


function Tag() {
  const { Tag: AntTag } = Antd;

  const {
    color: envColor,
    label: envLabel,
  } = defineEnvironment(window && window.ENV && window.ENV.MS_ENVIRONMENT);

  if (envLabel !== 'PROD') {
    return (
      <AntTag
        style={{ marginLeft: '16px', cursor: 'context-menu' }}
        color={envColor}
      >
        {envLabel}
      </AntTag>
    );
  }
  return null;
}
export default Tag;
