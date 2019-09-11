import React from 'react';
import { PropTypes } from 'prop-types';

import { Menu } from 'antd';

import './style.css';

const MenuItem = ({ items, domain }) => {
  const itemsSet = new Set();

  const filteredItens = items.filter((item) => {
    const duplicate = itemsSet.has(item.id);
    itemsSet.add(item.id);
    return !duplicate;
  });

  return (
    <Menu
      mode="inline"
      theme="dark"
    >
      {
        filteredItens.map((item) => {
          if (item.domain === domain || (!item.domain && domain === 'Others')) {
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      domain: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  domain: PropTypes.string,
};

MenuItem.defaultProps = {
  items: [],
  domain: '',
};

export default MenuItem;
