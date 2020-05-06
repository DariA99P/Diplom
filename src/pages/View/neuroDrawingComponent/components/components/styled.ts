import styled from 'styled-components';
import { Input, Select } from 'antd';

export const InputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const TitleStyled = styled.div`
  min-width: 144px;
  font-size: 16px;
`;
export const InputStyled = styled(Input)`
  margin-left: 8px;
  width: 300px;
`;
export const InputPasswordStyled = styled(Input.Password)`
  margin-left: 8px;
  width: 300px;
`;
export const SelectStyled = styled(Select)`
  margin-left: 8px;
  width: 300px;
`;
