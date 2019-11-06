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

import AccidentIncidentButton from './components/AccidentIncidentButons/AccidentIncidentButtons';
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
      <Row className="row-header" type="flex" align="middle" justify="space-between">
        <div className="panel header-info">
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
        <div className="panel" style={{ fontSize: '20px', color: '#FFF' }}>
          <div className="center">
            VistaJet Microservice
            <Tag />
          </div>
        </div>
        <div className="panel user-box">
          <AccidentIncidentButton />
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
