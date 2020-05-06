import actionCreatorFactory from 'typescript-fsa';
import { OpenWindowType, TypeDrawing } from '../../../Models/enum';

const actionCreator = actionCreatorFactory('filters');

export const changeOptions = actionCreator<OpenWindowType>('CHANGE_OPTIONS');

export const processDrawing = actionCreator.async<number[], any>(
  'PROCESS_DRAWING',
);

export const saveImage = actionCreator<string>('SAVE_IMAGE');
export const changeTypeDrawing = actionCreator<TypeDrawing>(
  'CHANGE_TYPE_DRAWING',
);
export const getUsersInfo = actionCreator.async<void, any>('GET_USERS_INFO');

export const removeSubscribers = actionCreator<number>('REMOVE_SUBSCRIBERS');
export const removeSubscriptions = actionCreator<number>(
  'REMOVE_SUBSCRIPTIONS',
);
