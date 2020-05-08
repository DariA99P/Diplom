import React from 'react';
import * as s from './styled';
import { ShareAltOutlined, DownloadOutlined } from '@ant-design/icons';
import { DeleteFilled } from '@ant-design/icons/lib';
import { Button, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import { IFiles } from '../../../../Models/interfaces';
import { removeImageFromDB } from '../../redux/actions';

export const MyDrawingsComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);
  const onShare = React.useCallback(() => {
    setOpen(false);
  }, []);
  const subscriptions = useSelector<RootState, string[]>(
    state => state.mainPage.subscriptions,
  );
  const files = useSelector<RootState, IFiles[]>(
    state => state.mainPage.user.files,
  );
  const onClickRemoveButton = React.useCallback(idFile => {
    dispatch(removeImageFromDB.started(idFile));
  }, []);

  return (
    <>
      <s.DrawingStyled>
        {files.map(item => (
          <div
            key={item.idFile}
            style={{ border: '1px solid lightgrey', height: 224 }}
          >
            <s.IconsBlockStyled>
              <s.IconStyled>
                <DownloadOutlined />
              </s.IconStyled>
              <s.IconStyled onClick={() => onClickRemoveButton(item.idFile)}>
                <DeleteFilled />
              </s.IconStyled>
              <s.IconStyled onClick={() => setOpen(true)}>
                <ShareAltOutlined />
              </s.IconStyled>
            </s.IconsBlockStyled>
            <img src={item.fileName} height={200} width={200} />
            <div>{`Creator: ${item.creator}`}</div>
          </div>
        ))}
      </s.DrawingStyled>
      <Modal
        visible={open}
        title="Share image"
        footer={[
          <Button key="close" onClick={onClose}>
            Close
          </Button>,
          <Button key="share" type="primary" onClick={onShare}>
            Share
          </Button>,
        ]}
      >
        <p>Available Users: </p>
        <Select style={{ width: 300 }}>
          {subscriptions.map(item => (
            <Select.Option key={item}>{item}</Select.Option>
          ))}
        </Select>
      </Modal>
    </>
  );
};
