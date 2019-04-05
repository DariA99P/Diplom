import React, { Component } from 'react';
import { Layout } from 'antd';
import Routes from '../Routes';
import Header from './header';
import Content from './content';
import Wrapper from './wrapper';
import Sidebar from './sidebar';
import ActionBar from '../actionBar/index';

import styles from './index.css';

class Main extends Component {
  state = {
    collapsed: false,
  }

  toggleSidebar = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar collapsed={collapsed} toggle={this.toggleSidebar} />
        <Layout>
          <Header collapsed={collapsed} toggle={this.toggleSidebar} />
          <ActionBar />
          <Content>
            <Wrapper>
              <Routes />
            </Wrapper>
          </Content>
          <span className={styles.copyright}>Copyright &copy; 2018 VistaJet</span>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
