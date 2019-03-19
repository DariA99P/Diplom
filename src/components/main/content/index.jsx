import React from 'react';

import { Antd } from '@vj/vjcomponentslibrary';

import styles from './styles.css';

const { Layout } = Antd;
const { Content: AntContent } = Layout;

function Content(props) {
  return <AntContent className={styles.content} {...props} />;
}

export default Content;
