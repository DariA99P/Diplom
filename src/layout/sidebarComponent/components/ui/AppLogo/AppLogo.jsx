import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Icon,
  Row,
  Col,
} from 'antd';

import Logo from '../../../../../assets/images/vj_logo.png';

import styles from './styles.css';

function AppLogo({ onToggle }) {
  return (
    <Row className={styles.iconRow}>
      <Col span={18}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={Logo} className={styles.appLogo} alt="Logo" />
          </Link>
        </div>
      </Col>
      <Col span={6}>
        <Icon
          className={styles.triggerFold}
          type="menu-fold"
          onClick={() => { onToggle(); }}
        />
      </Col>
    </Row>
  );
}

AppLogo.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default AppLogo;
