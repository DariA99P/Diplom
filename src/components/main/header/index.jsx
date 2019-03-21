import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Antd } from '@vj/vjcomponentslibrary';
import Clock from 'components/shared/clock';
import Breadcrumb from 'components/main/breadcrumb';
import Tag from './Tag';


import styles from './styles.css';

export function Header({ collapsed, name, toggle }) {
  const {
    Layout,
    Icon,
    Row,
    Menu,
    Dropdown,
  } = Antd;

  const { Header: AntHeader } = Layout;

  const menu = (
    <Menu>
      <Menu.Item>About</Menu.Item>
    </Menu>
  );

  return (
    <AntHeader className={styles.templateHeader}>
      <Row type="flex" align="center" justify="space-between">
        <div className={styles.headerInfo}>
          {
            collapsed
            && (
              <Icon
                className={styles.triggerUnfold}
                type="menu-unfold"
                onClick={() => { toggle(); }}
              />
            )
          }
          <Breadcrumb
            className={styles.templateBreadcrumb}
            style={{ color: 'var(--white, #FFFFFF)' }}
          />
        </div>
        <div style={{ fontSize: '20px', color: 'var(--white)' }}>
          VistaJet Microservice
          <Tag />
        </div>
        <div className={styles.userInfo}>
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

export default connect(
  ({ keycloak }) => ({
    name: keycloak.idTokenParsed.name,
  }),
)(Header);