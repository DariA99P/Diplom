import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Layout } from 'antd';

import Header from '../layout/headerComponent/HeaderComponent';
import Footer from '../layout/footerComponent/FooterComponent';
import Sidebar from '../layout/sidebarComponent/SidebarComponent';
import DinamicSidebar from '../layout/sidebarComponent/DinamicSidebar';

import Home from './home/Home';
import NotFound from './notFound/NotFound';
import { SIDEBAR_ENABLED } from '../utils/constants';

import '../assets/styles/styles.css';

const { Content } = Layout;

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

  renderSidebar(collapsed) {
    if (SIDEBAR_ENABLED) {
      return <DinamicSidebar collapsed={collapsed} toggle={this.toggleSidebar} />;
    }
    return <Sidebar collapsed={collapsed} toggle={this.toggleSidebar} />;
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          { this.renderSidebar(collapsed) }
          <Layout>
            <Header collapsed={collapsed} toggle={this.toggleSidebar} />
            <Content style={{ margin: '16px 16px 0 16px' }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Main;
