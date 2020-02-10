import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Layout } from 'antd';

import Header from '../layout/headerComponent/HeaderComponent';
import Footer from '../layout/footerComponent/FooterComponent';
import Sidebar from '../layout/sidebarComponent/SidebarComponent';

// import Home from './home/Home';
import NotFound from './notFound/NotFound';

import '../assets/styles/styles.css';
import PreparationTasks from './preparationTasks';

const { Content } = Layout;

class Main extends Component {
  state = {
    collapsed: false,
  };

  toggleSidebar = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar collapsed={collapsed} toggle={this.toggleSidebar} />
          <Layout>
            <Header collapsed={collapsed} toggle={this.toggleSidebar} />
            <Content>
              <Switch>
                <Route exact path="/" component={PreparationTasks} />
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
