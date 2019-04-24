import React from 'react';
import { PropTypes } from 'prop-types';

import { Menu } from 'antd';

// const { Menu } = Antd;

const MenuItem = ({ collapsed, items }) => (
  <Menu
    inlineCollapsed={collapsed}
    mode="inline"
    theme="dark"
  >
    {
      items.map(item => (
        <Menu.Item key={item.id}>
          <a href={item.url} target="_blank" rel="noopener noreferrer" id={item.id}>{item.name}</a>
        </Menu.Item>),
      )}
  </Menu>
);

MenuItem.propTypes = {
  collapsed: PropTypes.bool,
  items: PropTypes.arrayOf.isRequired,
};

MenuItem.defaultProps = {
  collapsed: false,
};

export default MenuItem;
