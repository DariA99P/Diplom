import styled from 'styled-components';
import { Modal } from 'antd';

export const SubAndSubComponentStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px;
  justify-content: space-between;
  width: 100%;
`;

export const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const SubAndSubBlockStyled = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const ScrollStyled = styled.div`
  height: 700px;
  ::-webkit-scrollbar {
    height: 6px;
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background: #f2f2f2;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    opacity: 0.6;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;

export const ModalStyled = styled(Modal)`
  .ant-modal-body {
    height: 300px;
  }
`;
