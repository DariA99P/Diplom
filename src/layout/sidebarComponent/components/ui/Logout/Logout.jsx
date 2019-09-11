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
        <Menu className="logout-menu" mode="inline" theme="dark">
          <Menu.Item onClick={() => this.logout()}>
            <div>Logout <Icon type="logout" /></div>
          </Menu.Item>
        </Menu>
      </Affix>
    );
  }
}

Logout.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  keycloak: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Logout);
