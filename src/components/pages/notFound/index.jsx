import React from 'react';
import PropTypes from 'prop-types';

import { Antd } from '@vj/vjcomponentslibrary';

import nook from '../../../utils/nook';

import notFoundImg from '../../../assets/images/not_found.png';

import styles from './styles.css';

function NotFound({ history }) {
  const { Row, Col, Button } = Antd;

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      gutter={76}
    >
      <Col lg={8} md={24} style={{ textAlign: 'center' }}>
        <img className={styles.img} src={notFoundImg} alt="Not Found" />
      </Col>
      <Col lg={8} md={24}>
        <h1 className={styles.title}>Error</h1>
        <p className={styles.text}>
          Sorry, the page you visited does not exist or is not available.
          Contact your administrator if you are having problems.
        </p>
        <Button onClick={() => history.goBack()} type="primary">Back</Button>
      </Col>
    </Row>
  );
}

NotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

NotFound.defaultProps = {
  history: {
    goBack: nook,
  },
};

export default NotFound;
