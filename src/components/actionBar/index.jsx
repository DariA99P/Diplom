import React from 'react';
import { Antd } from '@vj/vjcomponentslibrary';

import ActionWrapper from './actions/index';
import ButtonWrapper from './buttons/index';
import TabWrapper from './tabs/index';

import styles from './styles.css';

const { Col, Row } = Antd;

const ActionBar = () => (
  <Row className={styles.actionBar}>
    <Col
      span={8}
      style={{
        position: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <TabWrapper />
    </Col>
    <Col
      span={8}
      style={{
        position: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <ActionWrapper />
    </Col>
    <Col
      span={8}
      style={{
        position: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
      }}
    >
      <ButtonWrapper />
    </Col>
  </Row>
);

export default ActionBar;
