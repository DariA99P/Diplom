import React from 'react';
import * as s from './styled';
import { Avatar, Button, DatePicker, Descriptions, Input, Select } from 'antd';
import { PlusCircleFilled, UserOutlined } from '@ant-design/icons/lib';
// @ts-ignore
import Image from '../../../../../assets/images/avatar.jpg';

const userInfo = {
  _id: '5e9616012e04114c91e60931',
  username: 'Daria1999',
  firstName: 'Daria',
  lastName: 'Poprotska',
  phoneNumber: '0998765432',
  email: 'poprotskayd@gmail.com',
  organizationId: 0,
  password: 'Dashka99popr1',
};

const organizationsList = [
  'DI',
  'EPAM',
  'SoftServe',
  'GlobalLogic',
  'Luxoft',
  'Oracle',
];
export const PersonalAreaComponent: React.FC = () => {
  const [typeMode, setTypeMode] = React.useState(true);

  const onClick = React.useCallback(() => {
    setTypeMode(!typeMode);
  }, [typeMode]);
  return (
    <s.PersonalAreaComponent>
      <s.PhotoBlockStyled>
        <Avatar size={100} src={Image} />
        {!typeMode && <s.ChangePhotoStyled>Change Photo</s.ChangePhotoStyled>}
      </s.PhotoBlockStyled>
      <s.InfoBlockStyled>
        <s.DescriptionItemStyled title="User Info" bordered column={1}>
          <Descriptions.Item label="First name">
            {typeMode ? (
              <span>{userInfo.firstName}</span>
            ) : (
              <Input defaultValue={userInfo.firstName} />
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Last name">
            {typeMode ? (
              <span>{userInfo.lastName}</span>
            ) : (
              <Input defaultValue={userInfo.lastName} />
            )}
          </Descriptions.Item>
          <Descriptions.Item label="User name">
            {typeMode ? (
              <span>{userInfo.username}</span>
            ) : (
              <Input defaultValue={userInfo.username} />
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Emails: ">
            {userInfo.email}
            {!typeMode && <PlusCircleFilled style={{ marginLeft: '24px' }} />}
          </Descriptions.Item>
          <Descriptions.Item label="Phone Numbers: ">
            {typeMode ? (
              <span>{userInfo.phoneNumber}</span>
            ) : (
              <>
                <Input defaultValue={userInfo.phoneNumber} />
                <PlusCircleFilled style={{ marginTop: '8px' }} />
              </>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Date of birth: ">
            {typeMode ? <span>N/A</span> : <DatePicker />}
          </Descriptions.Item>
          <Descriptions.Item label="Name of the organization: ">
            {typeMode ? (
              'DI'
            ) : (
              <Select defaultValue="DI" style={{ width: 200 }}>
                {organizationsList.map(item => (
                  <Select.Option key={item}>{item}</Select.Option>
                ))}
              </Select>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Work experience: ">
            {typeMode ? <span>N/A</span> : <Input />}
          </Descriptions.Item>
          <Descriptions.Item label="Password: ">
            {typeMode ? (
              <span>*************</span>
            ) : (
              <Input type="password" defaultValue={userInfo.password} />
            )}
          </Descriptions.Item>
        </s.DescriptionItemStyled>
        <s.ButtonBlockStyled>
          {!typeMode && (
            <s.ButtonStyled onClick={onClick}>Cancel</s.ButtonStyled>
          )}
          <s.ButtonStyled type="primary" onClick={onClick}>
            {typeMode ? 'Edit' : 'Save'}
          </s.ButtonStyled>
        </s.ButtonBlockStyled>
      </s.InfoBlockStyled>
    </s.PersonalAreaComponent>
  );
};
