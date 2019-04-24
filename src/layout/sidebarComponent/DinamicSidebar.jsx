import React from 'react';
import { PropTypes } from 'prop-types';
import {
  ApolloClient, ApolloLink, InMemoryCache, HttpLink,
} from 'apollo-boost';
import { Query, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import { Layout } from 'antd';
import { SIDEBAR_BACKEND_URL } from '../../utils/constants';

import {
  AppLogo,
  SearchItem,
  MenuItem,
  Logout,
} from './components/ui';

import Logic from './components/logic';
import store from '../../redux/store';

import styles from './style.css';

const { Sider } = Layout;

const httpLink = new HttpLink({ uri: SIDEBAR_BACKEND_URL });

const authLink = new ApolloLink((operation, forward) => {
  const keyCloakToken = store.getState().keycloak.token;
  operation.setContext({
    headers: {
      authorization: keyCloakToken ? `Bearer ${keyCloakToken}` : '',
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


class DinamicSideBar extends React.Component {
  state = {
    query: '',
  }

  handleSearch(query) {
    this.setState({ query });
  }

  render() {
    const {
      collapsed,
      toggle,
    } = this.props;

    const {
      query,
    } = this.state;

    return (
      <Sider
        className={styles.sidebar}
        width={255}
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={0}
      >
        <AppLogo onToggle={toggle} />
        <SearchItem query={query} onSearch={term => this.handleSearch(term)} />
        <ApolloProvider client={client}>
          <Query
            query={gql`
                {
                  apps {
                    id
                    name
                    url
                  }
                }
              `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading....</p>;
              if (error) return <p>Something went wrong...</p>;

              return (
                <MenuItem
                  collapsed={collapsed}
                  items={Logic.filterItems(query, data.apps)}
                  query={query}
                />);
            }}
          </Query>
        </ApolloProvider>
        <Logout keycloak={store.getState().keycloak} />
      </Sider>

    );
  }
}

DinamicSideBar.propTypes = {
  collapsed: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

DinamicSideBar.defaultProps = {
  collapsed: false,
};

export default DinamicSideBar;
