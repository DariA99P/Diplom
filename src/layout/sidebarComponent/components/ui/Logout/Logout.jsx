import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Affix,
  Menu,
  Divider,
  Icon,
} from 'antd';
import { PropTypes } from 'prop-types';

import './style.css';

class Logout extends Component {
  logout() {
    const {
      history,
      keycloak,
    } = this.props;

    history.push('/');
    keycloak.logout();
  }

  render() {
    return (
      <Affix className="logout">
        <Divider className="divider" />
        <Menu className="logoutMenu" mode="inline" theme="dark">
          <Menu.Item onClick={() => this.logout()}>
            <div>Logout <Icon type="logout" /></div>
          </Menu.Item>
        </Menu>
      </Affix>
    );
  }
}

Logout.propTypes = {
  history: PropTypes.func.isRequired,
  keycloak: PropTypes.func.isRequired,
};

export default withRouter(Logout);
