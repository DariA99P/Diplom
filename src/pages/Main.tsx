import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Footer from '../layout/footerComponent/FooterComponent';
import NotFound from './View/notFound/NotFound';
import { Header } from '../layout/headerComponent/HeaderComponent';
import { NeuroDrawing } from './View/neuroDrawingComponent';
import AuthComponent from './View/Auth';
import RegisterFormComponent from './View/Auth/registerForm';

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
      <Layout style={{ minHeight: '100vh' }}>
        <Layout style={{ background: 'white' }}>
          <Header collapsed={collapsed} toggle={this.toggleSidebar} />
          <Content>
            <Switch>
              <Route exact path="/mainPage" component={NeuroDrawing} />
              <Route exact path="/register" component={RegisterFormComponent} />
              <Route exact path="/" component={AuthComponent} />
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default Main;
