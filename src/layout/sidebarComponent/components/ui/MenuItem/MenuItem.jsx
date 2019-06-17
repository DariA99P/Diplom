import React from 'react';
import { PropTypes } from 'prop-types';

import { Menu } from 'antd';

import './style.css';

const MenuItem = ({ collapsed, items }) => (
  <Menu
    inlineCollapsed={collapsed}
    mode="inline"
    theme="dark"
  >
    {
      items.map(item => (
        <Menu.Item key={item.id} className="menu-item">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="menu-item-name" id={item.id}>{item.name}</a>
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
