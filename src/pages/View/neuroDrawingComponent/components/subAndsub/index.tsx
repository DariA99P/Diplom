import React from 'react';
import * as s from './styled';
import { Avatar, Button, List, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import { removeSubscribers, removeSubscriptions } from '../../redux/actions';

export const ListComponent: React.FC<{ type: number }> = ({ type }) => {
  const dispatch = useDispatch();
  const subsribers = useSelector<RootState, string[]>(
    state => state.mainPage.subscribers,
  );
  const subscriptions = useSelector<RootState, string[]>(
    state => state.mainPage.subscriptions,
  );
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
      dataSource={type ? subscriptions : subsribers}
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
  return (
    <s.SubAndSubComponentStyled>
      <s.ColumnStyled>
        <s.TitleStyled>Subsribers</s.TitleStyled>
        <ListComponent type={0} />
      </s.ColumnStyled>
      <s.ColumnStyled>
        <s.TitleStyled>Subsriptions</s.TitleStyled>
        <ListComponent type={1} />
      </s.ColumnStyled>
    </s.SubAndSubComponentStyled>
  );
};
