import React from 'react';
import { Provider } from 'react-redux';

import { LocaleProvider } from 'antd';
import enUs from 'antd/lib/locale-provider/en_US';

import store from './redux/store';
import Main from './pages/Main';
import { Router } from 'react-router-dom';
import history from './config/history';

const App = () => (
  <Provider store={store}>
    <LocaleProvider locale={enUs}>
      <Router history={history}>
        <Main />
      </Router>
    </LocaleProvider>
  </Provider>
);

export default App;
