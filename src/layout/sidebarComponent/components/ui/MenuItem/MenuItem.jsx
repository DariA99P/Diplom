import React from 'react';
import { PropTypes } from 'prop-types';

import { Menu } from 'antd';

import './style.css';

const MenuItem = ({ collapsed, items, domain }) => {
  const itensSet = new Set();

  const filteredItens = items.filter((item) => {
    const duplicate = itensSet.has(item.id);
    itensSet.add(item.id);
    return !duplicate;
  });

  return (
    <Menu
      inlineCollapsed={collapsed}
      mode="inline"
      theme="dark"
    >
      {
        filteredItens.map((item) => {
          if (item.domain === domain) {
            return (
              <Menu.Item key={item.id} className="menu-item">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="menu-item-name" id={item.id}>{item.name}</a>
              </Menu.Item>);
          }
          return null;
        })}
    </Menu>
  );
};

MenuItem.propTypes = {
  collapsed: PropTypes.bool,
  items: PropTypes.arrayOf.isRequired,
  domain: PropTypes.string,
};

MenuItem.defaultProps = {
  collapsed: false,
  domain: '',
};

export default MenuItem;
