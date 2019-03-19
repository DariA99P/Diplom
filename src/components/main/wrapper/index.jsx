import React from 'react';

import styles from './styles.css';

function Wrapper(props) {
  return (
    <div className={styles.wrapper} {...props} />
  );
}

export default Wrapper;
