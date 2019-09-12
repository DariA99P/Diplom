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

import Logout from './components/ui/Logout/Logout';

import store from '../../redux/store';

import { SIDEBAR_BACKEND_URL, SIDEBAR_ENABLED } from '../../utils/constants';
import ALL_APPS_QUERY from '../../dataSource/graphql-requests';

import Logo from '../../assets/images/vj_logo.png';

import './style.css';

const { Sider } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;

const renderSubMenu = (domains, visibleApps) => {
  const itemsSet = new Set();

  const filteredItems = visibleApps.filter((item) => {
    const duplicate = itemsSet.has(item.id);
    itemsSet.add(item.id);
    return !duplicate;
  });
  return domains.map(domain => (
    <SubMenu
      key={domain}
      title={domain}
    >
      {
        filteredItems.map((item) => {
          if (item.domain === domain || (!item.domain && domain === 'Others')) {
            return (
              <Menu.Item key={item.id} className="menu-item">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="menu-item-name" id={item.id}>{item.name}</a>
              </Menu.Item>);
          }
          return null;
        })
    }
    </SubMenu>
  ));
};

class SideBar extends React.Component {
  state = {
    query: '',
    allApps: [],
    domains: [],
    openDomains: [],
    visibleApps: [],
    selectedApp: {},
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

    const domains = [...domainSet].sort((a, b) => {
      if (a === 'Others' && b !== 'Others') { return 1; }
      if (a !== 'Others' && b === 'Others') { return -1; }
      if (a > b) { return 1; }
      if (a < b) { return -1; }
      return 0;
    });

    this.setState({
      allApps: apps,
      domains,
      openDomains: [...domainSet],
      visibleApps: apps,
      selectedApp: groupAppsByUrl.get(window.location.href),
    });
  }

  handleClick = (element) => {
    this.setState({
      selectedApp: element.key,
    });
  };

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

  handleSearch = (query) => {
    const visibleApps = this.filterApps(query);
    const filteredDomains = new Set();
    visibleApps.forEach((app) => {
      filteredDomains.add(app.domain || 'Others');
    });

    const domains = [...filteredDomains].sort((a, b) => {
      if (a === 'Others' && b !== 'Others') { return 1; }
      if (a !== 'Others' && b === 'Others') { return -1; }
      if (a > b) { return 1; }
      if (a < b) { return -1; }
      return 0;
    });

    this.setState({
      query, domains, openDomains: [...filteredDomains], visibleApps,
    });
  }

  filterApps = (query) => {
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
      selectedApp,
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
          onClick={this.handleClick}
          selectedKeys={[selectedApp]}
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
