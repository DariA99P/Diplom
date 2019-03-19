import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

function Loader({ error, pastDelay }) {
  if (error) {
    return <h1>Something Went Wrong!</h1>;
  }

  if (pastDelay) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader} />
      </div>
    );
  }

  return null;
}

Loader.propTypes = {
  error: PropTypes.bool,
  pastDelay: PropTypes.bool,
};

Loader.defaultProps = {
  error: false,
  pastDelay: true,
};

export default Loader;
