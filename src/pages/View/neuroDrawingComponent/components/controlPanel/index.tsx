import React from 'react';
import * as s from './styled';
import { Menu } from 'antd';
import { changeOptions } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export const ControlPanelComponent: React.FC = () => {
  const dispatch = useDispatch();
  const onClick = React.useCallback(e => {
    dispatch(changeOptions(e.key));
  }, []);
  return (
    <s.ControlPanelComponentStyled>
      <Menu
        style={{ width: 300 }}
        defaultSelectedKeys={['1']}
        mode="inline"
        onClick={onClick}
      >
        <Menu.Item key="1">Editor</Menu.Item>
        <Menu.Item key="2">My drawings</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
        <Menu.Item key="4">Personal area</Menu.Item>
        <Menu.Item key="5">Subscribers &amp; Subscriptions</Menu.Item>
      </Menu>
    </s.ControlPanelComponentStyled>
  );
};
