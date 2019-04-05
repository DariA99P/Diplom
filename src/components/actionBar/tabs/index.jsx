import React from 'react';
import { Menu } from 'antd';

import styles from './styles.css';

const { Item } = Menu;

const TabWrapper = () => (
  <div className={styles.tabWrapper}>
    <Menu
      onClick={() => {}}
      mode="horizontal"
      className={styles.tabWrapperMenu}
    >
      <Item>Index</Item>
      <Item>Tab 1</Item>
      <Item>Tab 2</Item>
      <Item>Tab 3</Item>
    </Menu>
  </div>
);

export default TabWrapper;
