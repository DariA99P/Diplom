import actionCreatorFactory from 'typescript-fsa';
import { OpenWindowType, TypeDrawing } from '../../../Models/enum';
import { UserInfo } from '../../../Models/interfaces';

const actionCreator = actionCreatorFactory('filters');

export const changeOptions = actionCreator<OpenWindowType>('CHANGE_OPTIONS');

export const processDrawing = actionCreator.async<number[], any>(
  'PROCESS_DRAWING',
);

export const saveImage = actionCreator<string>('SAVE_IMAGE');
export const changeTypeDrawing = actionCreator<TypeDrawing>(
  'CHANGE_TYPE_DRAWING',
);
export const getListUsers = actionCreator.async<
  void,
  Array<{
    id: string;
    allName: string;
    email: string;
  }>
>('GET_LIST_USERS');

export const removeSubscribers = actionCreator<number>('REMOVE_SUBSCRIBERS');
export const removeSubscriptions = actionCreator<number>(
  'REMOVE_SUBSCRIPTIONS',
);

export const saveImageToDB = actionCreator.async<string, UserInfo>(
  'SAVE_IMAGE_TO_DB',
);

export const removeImageFromDB = actionCreator.async<string, UserInfo>(
  'REMOVE_IMAGE_FROM_DB',
);

export const subscribersToUsers = actionCreator.async<string[], UserInfo>(
  'SUBSCRIBERS_TO_USERS',
);
