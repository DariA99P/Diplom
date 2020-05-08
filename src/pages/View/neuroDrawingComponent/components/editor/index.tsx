import React from 'react';
import * as s from './styled';
import { Button, Modal, Select, Spin, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeTypeDrawing,
  getListUsers,
  processDrawing,
  saveImage,
  saveImageToDB,
} from '../../redux/actions';
import { PictureOutlined, SaveOutlined } from '@ant-design/icons';
import { TypeDrawing } from '../../../../Models/enum';
import { RootState } from '../../../../../redux';
import saveImageToDeviceController from '../../../../Controllers/imageControllers/saveImageToDeviceController';
import magicButtonController from '../../../../Controllers/imageControllers/editor/magicButtonController';
import CanvasModule from '../../../../Controllers/imageControllers/editor/canvasController';
import removeImageController from '../../../../Controllers/imageControllers/removeImageController';
import { MagicIcons } from '../../../../../assets/images/MagicIcons';
import { downloadImageController } from '../../../../Controllers/imageControllers/editor/downloadImageController';
import { saveImageToDBController } from '../../../../Controllers/imageControllers/editor/saveImageToDBController';

const buttonStyle: React.CSSProperties = { marginLeft: '16px' };
export const Editor: React.FC = () => {
  const dispatch = useDispatch();

  const typeDrawing = useSelector<RootState, TypeDrawing>(
    state => state.mainPage.typeDrawing,
  );
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    CanvasModule.getCanvas();
  }, []);

  const onClickProcess = React.useCallback(() => {
    // setLoading(true);
    const vector = magicButtonController();
    dispatch(processDrawing.started(vector));
    setOpen(true);
  }, []);
  const onClickSaveToDevice = React.useCallback(() => {
    const data = saveImageToDeviceController();
    dispatch(saveImage(data));
  }, []);
  const onClickImage = React.useCallback(() => {
    downloadImageController();
    dispatch(changeTypeDrawing(TypeDrawing.image));
  }, []);
  const onClickClear = React.useCallback(() => {
    removeImageController();
    dispatch(changeTypeDrawing(TypeDrawing.canvas));
  }, []);

  const onYes = React.useCallback(() => {
    setOpen(false);
  }, []);
  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);
  const onClickSaveToDB = React.useCallback(() => {
    const data = saveImageToDBController();
    dispatch(saveImageToDB.started(data));
  }, []);

  return (
    <Spin spinning={loading}>
      <s.EditorComponent>
        <s.ToolbarComponent>
          <input
            type="file"
            id="inputID"
            accept="image/*"
            style={{ display: 'none' }}
          />
          <Tooltip title="Download image from device">
            <PictureOutlined onClick={onClickImage} />
          </Tooltip>
          <Tooltip title="Save image to device">
            <SaveOutlined
              onClick={onClickSaveToDevice}
              style={{ marginTop: '24px' }}
            />
          </Tooltip>
          <Tooltip title="Process image">
            <div onClick={onClickProcess}>
              <MagicIcons />
            </div>
          </Tooltip>
        </s.ToolbarComponent>
        <s.CanvasComponent>
          <canvas
            id="canvasId"
            width="500"
            height="500"
            style={{ border: '1px solid' }}
          />
          <s.ButtonBlockStyled>
            <Button type="primary" onClick={onClickClear}>
              {typeDrawing === TypeDrawing.canvas
                ? 'Clear canvas'
                : 'Remove image'}
            </Button>
            <Button
              type="primary"
              style={buttonStyle}
              onClick={onClickSaveToDB}
            >
              {typeDrawing === TypeDrawing.canvas
                ? 'Save canvas'
                : 'Save image'}
            </Button>
          </s.ButtonBlockStyled>
        </s.CanvasComponent>
      </s.EditorComponent>
      <Modal
        visible={open}
        title="Confirm"
        footer={[
          <Button key="no" onClick={onClose}>
            No
          </Button>,
          <Button key="yes" type="primary" onClick={onYes}>
            Yes
          </Button>,
        ]}
      >
        <p>Did the neural network recognize the image?</p>
      </Modal>
    </Spin>
  );
};
