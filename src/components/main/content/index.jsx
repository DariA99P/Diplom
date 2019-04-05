import React from 'react';

import { Layout } from 'antd';

import styles from './styles.css';

const { Content: AntContent } = Layout;

function Content(props) {
  return <AntContent className={styles.content} {...props} />;
}

export default Content;
