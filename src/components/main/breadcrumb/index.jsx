import React from 'react';
import PropTypes from 'prop-types';

import { withRouter, Link } from 'react-router-dom';
import { Antd } from '@vj/vjcomponentslibrary';

import breadcrumbNameMap from '../../../constants/breadcrumbNameMap';

export function Breadcrumb({ location, ...others }) {
  const { Breadcrumb: AntBreadcrumb } = Antd;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const mappedBreadcrumb = breadcrumbNameMap[url];

    return mappedBreadcrumb && (
      <AntBreadcrumb.Item key={url}>
        <Link to={url}>
          {mappedBreadcrumb}
        </Link>
      </AntBreadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <AntBreadcrumb.Item key="home">
      <Link href to="/">Dashboard</Link>
    </AntBreadcrumb.Item>
  )].concat(extraBreadcrumbItems);

  return (
    <AntBreadcrumb style={{ margin: '1rem 0' }} {...others}>
      {breadcrumbItems}
    </AntBreadcrumb>
  );
}

Breadcrumb.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Breadcrumb);
