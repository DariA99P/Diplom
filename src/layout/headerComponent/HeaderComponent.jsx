import React from 'react';

import { Layout, Icon, Row } from 'antd';

import Clock from '../../shared/Clock';

import './style.css';

export const Header = ({ collapsed, toggle }) => {
  const { Header: AntHeader } = Layout;

  // const menu = (
  //   <Menu>
  //     <Menu.Item>About</Menu.Item>
  //   </Menu>
  // );

  return (
    <AntHeader className="template-header">
      <Row
        className="row-header"
        type="flex"
        align="middle"
        justify="space-between"
      >
        <div className="panel header-info">
          {collapsed && (
            <Icon
              className="trigger-unfold"
              type="menu-unfold"
              onClick={() => {
                toggle();
              }}
            />
          )}
        </div>
        <div className="panel" style={{ fontSize: '30px', color: '#FFF' }}>
          <div className="center">Neuro Drawing</div>
        </div>
        <div className="panel user-box">
          <div className="right">
            <div className="user-info">
              <Clock style={{ lineHeight: '1px' }} />
            </div>
          </div>
        </div>
      </Row>
    </AntHeader>
  );
};
