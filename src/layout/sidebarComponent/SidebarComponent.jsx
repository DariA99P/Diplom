import React from 'react';
import { PropTypes } from 'prop-types';

import {
  AccountCardDetailsIcon,
  AirportIcon,
  BulletinBoardIcon,
  GestureDoubleTapIcon,
  AccountStarIcon,
  WalletMembershipIcon,
  FinanceIcon,
  CogIcon,
  InboxMultipleIcon,
  NutritionIcon,
} from 'mdi-react';

import {
  Layout,
  Menu,
  Icon,
  Row,
  Col,
  Input,
} from 'antd';

import { Link } from 'react-router-dom';

import Logo from '../../assets/images/vj_logo.png';

import './style.css';

const { SubMenu } = Menu;
const { Sider } = Layout;
const { Search } = Input;

function SideBar({ collapsed, toggle }) {
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
          onSearch={() => { }}
          style={{ width: 200 }}
        />
      </Row>
      <Menu
        inlineCollapsed={collapsed}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BulletinBoardIcon size="18" />
            <span style={{ marginLeft: '6px' }}>Reports</span>
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <GestureDoubleTapIcon size="18" />
            <span style={{ marginLeft: '6px' }}>On Demand</span>
          </div>
        </Menu.Item>
        <Menu.Item key="3">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AirportIcon size="18" />
            <span style={{ marginLeft: '6px' }}>Operations</span>
          </div>
        </Menu.Item>
        <Menu.Item key="4">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AccountCardDetailsIcon size="18" />
            <span style={{ marginLeft: '6px' }}>Program</span>
          </div>
        </Menu.Item>
        <Menu.Item key="5">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <WalletMembershipIcon size="18" />
            <span style={{ marginLeft: '6px' }}>Membership</span>
          </div>
        </Menu.Item>
        <Menu.Item key="6">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FinanceIcon size="18" />
            <span style={{ marginLeft: '6px' }}>Finance</span>
          </div>
        </Menu.Item>
        <Menu.Item key="7">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AccountStarIcon size="18" />
            <span style={{ marginLeft: '6px' }}>Customer Service</span>
          </div>
        </Menu.Item>
        <Menu.Item key="8">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InboxMultipleIcon size="18" />
            <span style={{ marginLeft: '6px' }}>Service Providers</span>
          </div>
        </Menu.Item>
        <Menu.Item key="9">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <NutritionIcon size="18" />
            <span style={{ marginLeft: '6px' }}>Catering</span>
          </div>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={(
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CogIcon size="18" className="mdi-spin" />
              <span className="mdi mdi-access-point" />
              <span style={{ marginLeft: '6px' }}>Administration</span>
            </div>
          )}
        >
          <Menu.Item key="10">Aircrafts</Menu.Item>
          <SubMenu key="sub2" title="Airports">
            <Menu.Item key="11">Airport Center</Menu.Item>
          </SubMenu>
          <Menu.Item key="12">Companies</Menu.Item>
          <Menu.Item key="13">People</Menu.Item>
          <Menu.Item key="14">Black List</Menu.Item>
          <Menu.Item key="15">Service Areas</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

SideBar.propTypes = {
  collapsed: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

SideBar.defaultProps = {
  collapsed: false,
};

export default SideBar;
