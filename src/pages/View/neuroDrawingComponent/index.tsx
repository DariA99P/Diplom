import React from 'react';
import { Editor } from './components/editor';
import * as s from './styled';
import { ControlPanelComponent } from './components/controlPanel';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { OpenWindowType } from '../../Models/enum';
import { AboutComponent } from './components/about';
import { MyDrawingsComponent } from './components/myDrawings';
import { PersonalAreaComponent } from './components/personalArea';
import { SubscribersAndSubscriptionsComponent } from './components/subAndsub';
import { initializeData } from '../Auth/reducer/actions';

export const NeuroDrawing = () => {
  const dispatch = useDispatch();
  const openWindow = useSelector<RootState, OpenWindowType>(
    state => state.mainPage.openWindow,
  );
  React.useEffect(() => {
    dispatch(initializeData.started());
  }, []);
  const activeControlPanel = () => {
    switch (openWindow) {
      case OpenWindowType.Editor:
        return <Editor />;
      case OpenWindowType.About:
        return <AboutComponent />;
      case OpenWindowType.MyDrawings:
        return <MyDrawingsComponent />;
      case OpenWindowType.PersonalArea:
        return <PersonalAreaComponent />;
      default:
        return <SubscribersAndSubscriptionsComponent />;
    }
  };
  return (
    <s.MainBlockStyled>
      <ControlPanelComponent />
      {activeControlPanel()}
    </s.MainBlockStyled>
  );
};
