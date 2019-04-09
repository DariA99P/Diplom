import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Layout,
  Icon,
  Row,
  Menu,
  Dropdown,
} from 'antd';

import Clock from '../../shared/Clock';
import Tag from '../../shared/Tag';

import './style.css';

export function Header({ collapsed, name, toggle }) {
  const { Header: AntHeader } = Layout;

  const menu = (
    <Menu>
      <Menu.Item>About</Menu.Item>
    </Menu>
  );

  return (
    <AntHeader className="template-header">
      <Row type="flex" align="middle" justify="space-between">
        <div className="header-info">
          {
            collapsed
            && (
              <Icon
                className="trigger-unfold"
                type="menu-unfold"
                onClick={() => { toggle(); }}
              />
            )
          }
        </div>
        <div style={{ fontSize: '20px', color: '#FFF' }}>
          VistaJet Microservice
          <Tag />
        </div>
        <div className="user-info">
          <Clock style={{ lineHeight: '1px' }} />
          <Dropdown
            style={{ lineHeight: '1px' }}
            overlay={menu}
            trigger={['click']}
          >
            <span>
              {name}<Icon type="down" />
            </span>
          </Dropdown>
        </div>
      </Row>
    </AntHeader>
  );
}

Header.propTypes = {
  collapsed: PropTypes.bool,
  name: PropTypes.string,
  toggle: PropTypes.func.isRequired,
};

Header.defaultProps = {
  name: '',
  collapsed: false,
};

export default connect(({ keycloak }) => ({
  name: keycloak.idTokenParsed.name,
}),
)(Header);
