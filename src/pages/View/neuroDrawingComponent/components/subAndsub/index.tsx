import React from 'react';
import * as s from './styled';
import { Avatar, Button, List, Skeleton, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import {
  removeSubscribers,
  removeSubscriptions,
  subscribersToUsers,
} from '../../redux/actions';
import { UserInfo } from '../../../../Models/interfaces';

interface Props {
  dataSource: Array<{
    id: string;
    allName: string;
    email: string;
  }>;
  type: number;
}
export const ListComponent: React.FC<Props> = ({ type, dataSource }) => {
  const dispatch = useDispatch();
  const onClick = React.useCallback((index: number) => {
    if (!type) {
      dispatch(removeSubscribers(index));
    } else {
      dispatch(removeSubscriptions(index));
    }
  }, []);
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={(item, index) => (
        <List.Item>
          <Skeleton avatar title={false} loading={false} active>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item}</a>}
            />
            <Button
              type="primary"
              style={{ marginLeft: '24px' }}
              onClick={() => onClick(index)}
            >
              {type ? 'Unsubscribe' : 'Subscribe'}
            </Button>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export const SubscribersAndSubscriptionsComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [drawer, setDrawer] = React.useState(false);
  const onClick = React.useCallback(() => setDrawer(true), []);
  const user = useSelector<RootState, UserInfo>(state => state.mainPage.user);
  const [newSubscriptions, setNewSub] = React.useState([]);
  const listUsers = useSelector<
    RootState,
    Array<{
      id: string;
      allName: string;
      email: string;
    }>
  >(state => state.mainPage.listUsers);
  const subsribers = listUsers.filter(item =>
    user.subscribersIds.includes(item.id),
  );
  const subscriptions = listUsers.filter(item =>
    user.subscriptionsIds.includes(item.id),
  );
  const unSubscribers = listUsers.filter(
    item => !user.subscriptionsIds.includes(item.id),
  );
  const onChange = React.useCallback(values => {
    setNewSub(values);
  }, []);
  const onClickSubscribe = React.useCallback(() => {
    dispatch(subscribersToUsers.started(newSubscriptions));
  }, [newSubscriptions]);
  const onClickClose = React.useCallback(() => {
    setNewSub([]);
    setDrawer(false);
  }, []);

  return (
    <s.SubAndSubComponentStyled>
      <div />
      <s.SubAndSubBlockStyled>
        <s.ColumnStyled>
          <s.TitleStyled>Subsribers</s.TitleStyled>
          <ListComponent type={0} dataSource={subsribers} />
        </s.ColumnStyled>
        <s.ColumnStyled>
          <s.TitleStyled>Subsriptions</s.TitleStyled>
          <ListComponent type={1} dataSource={subscriptions} />
        </s.ColumnStyled>
      </s.SubAndSubBlockStyled>
      <Button type="primary" onClick={onClick}>
        Subscription Management
      </Button>
      <s.ModalStyled
        visible={drawer}
        title="Subscribe to a new user"
        footer={[
          <Button key="close" onClick={onClickClose}>
            Close
          </Button>,
          <Button key="subscribe" type="primary" onClick={onClickSubscribe}>
            Subscribe
          </Button>,
        ]}
      >
        <p>A list of users </p>
        <Select style={{ width: 300 }} mode="multiple" onChange={onChange}>
          {unSubscribers.map(item => (
            <Select.Option key={item.id} value={item.id}>
              {item.allName}
            </Select.Option>
          ))}
        </Select>
      </s.ModalStyled>
    </s.SubAndSubComponentStyled>
  );
};
