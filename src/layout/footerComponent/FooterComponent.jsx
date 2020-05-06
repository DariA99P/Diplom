import React from 'react';
import { Layout, Col, Row } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ backgroundColor: '#FAFAFA' }}>
    <Row>
      <Col span={24} style={{ textAlign: 'center' }}>
        Copyright ©2020 Poprotska Daria
      </Col>
    </Row>
  </Footer>
);

export default FooterComponent;
