import React from 'react';
import { Layout, Col, Row } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ backgroundColor: '#FAFAFA' }}>
    <Row>
      <Col span={24} style={{ textAlign: 'center' }}>
        Copyright ©2018, 2019 VistaJet
      </Col>
    </Row>
  </Footer>
);

export default FooterComponent;
