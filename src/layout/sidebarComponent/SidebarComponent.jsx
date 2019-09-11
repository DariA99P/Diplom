import React from 'react';
import { PropTypes } from 'prop-types';
import { GraphQLClient } from 'graphql-request';

import { Link } from 'react-router-dom';

import {
  Layout,
  Menu,
  Icon,
  Row,
  Col,
  Input,
} from 'antd';

import MenuItem from './components/ui/MenuItem/MenuItem';
import Logout from './components/ui/Logout/Logout';

import store from '../../redux/store';

import { SIDEBAR_BACKEND_URL, SIDEBAR_ENABLED } from '../../utils/constants';
import ALL_APPS_QUERY from '../../dataSource/graphql-requests';

import Logo from '../../assets/images/vj_logo.png';

import './style.css';

const { Sider } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;

const renderSubMenu = (domains, visibleApps) => (
  domains.map(domain => (
    <SubMenu
      key={domain}
      title={domain}
    >
      <MenuItem
        domain={domain}
        items={visibleApps}
      />
    </SubMenu>
  )));

class SideBar extends React.Component {
  state = {
    query: '',
    allApps: [],
    domains: [],
    openDomains: [],
    visibleApps: [],
    currentApp: [],
  }

  componentDidMount() {
    if (SIDEBAR_ENABLED) {
      this.getAllApplications();
    }
  }

  async getAllApplications() {
    const keyCloakToken = store.getState().keycloak.token;
    const graphQLClient = new GraphQLClient(SIDEBAR_BACKEND_URL, {
      headers: {
        authorization: keyCloakToken ? `Bearer ${keyCloakToken}` : '',
      },
    });

    const result = await graphQLClient.request(ALL_APPS_QUERY);

    const { apps } = result;
    const domainSet = new Set();
    const groupAppsByUrl = new Map();
    apps.forEach((app) => {
      domainSet.add(app.domain || 'Others');
      groupAppsByUrl.set(app.url, app.name);
    });

    this.setState({
      allApps: apps,
      domains: [...domainSet],
      openDomains: [...domainSet],
      visibleApps: apps,
      currentApp: groupAppsByUrl.get(window.location.href),
    });
  }

  onOpenChange = (openedDomains) => {
    const { domains } = this.state;
    const latestOpenKey = openedDomains.find(key => openedDomains.indexOf(key) === -1);
    if (domains.indexOf(latestOpenKey) === -1) {
      this.setState({ openDomains: openedDomains });
    } else {
      this.setState({
        openDomains: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  handleSearch(query) {
    const visibleApps = this.filterApps(query);
    const filteredDomains = new Set();
    visibleApps.forEach((app) => {
      filteredDomains.add(app.domain || 'Others');
    });
    this.setState({ query, domains: [...filteredDomains], visibleApps });
  }

  filterApps(query) {
    const { allApps } = this.state;
    if (query.length < 3 && query.length >= 0) return allApps;
    if (allApps === null) return [];
    return (allApps.filter(item => item.name.toLowerCase()
      .indexOf(query.toLowerCase()) !== -1));
  }

  render() {
    const {
      collapsed,
      toggle,
    } = this.props;

    const {
      query,
      domains,
      openDomains,
      visibleApps,
      currentApp,
    } = this.state;

    return (
      <Sider
        className="sidebar"
        width={255}
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={0}
      >
        <Row style={{ backgroundColor: '#002140' }}>
          <Col span={18}>
            <div className="logo-container" style={{ textAlign: 'center', height: '100%' }}>
              <Link to="/">
                <img src={Logo} className="App-logo" alt="Logo" style={{ width: '70%', paddingTop: '8%' }} />
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <Icon
              className="trigger-fold"
              type="menu-fold"
              onClick={() => { toggle(); }}
            />
          </Col>
        </Row>
        <Row type="flex" justify="space-around" style={{ padding: '16px 0' }}>
          <Search
            className="ant-search"
            value={query}
            onChange={e => this.handleSearch(e.target.value)}
            style={{ width: 200 }}
          />
        </Row>
        <Menu
          mode="inline"
          theme="dark"
          openKeys={openDomains}
          onOpenChange={this.onOpenChange}
          selectedKeys={currentApp}
        >
          {renderSubMenu(domains, visibleApps)}
          <Menu.Item />
        </Menu>
        <Logout keycloak={store.getState().keycloak} />
      </Sider>
    );
  }
}

SideBar.propTypes = {
  collapsed: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

SideBar.defaultProps = {
  collapsed: false,
};

export default SideBar;
