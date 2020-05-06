import styled from 'styled-components';
import { Button, Descriptions } from 'antd';

export const PersonalAreaComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 24px auto;
  justify-content: space-between;
`;

export const PhotoBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChangePhotoStyled = styled(Button)`
  margin-top: 16px;
`;

export const InfoBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionItemStyled = styled(Descriptions)`
  .ant-descriptions-item-content {
    width: 400px;
  }
`;

export const ButtonBlockStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonStyled = styled(Button)`
  width: 200px;
  margin-top: 24px;
  margin-left: 24px;
`;
