import actionCreatorFactory from 'typescript-fsa';
import {
  IAuthUserSchema,
  IRegisterUserSchema,
} from '../../../Models/interfaces';

const actionCreator = actionCreatorFactory('auth');

export const enterUserInfo = actionCreator.async<void, string>(
  'ENTER_USER_INFO',
);

export const changeStatusForm = actionCreator('USER_CLICK_SIGN_UP_BUTTON');
export const userSubmitRegisterForm = actionCreator.async<
  IRegisterUserSchema,
  any
>('USER_SUBMIT_REGISTER_FORM');

export const userLogsIn = actionCreator.async<IAuthUserSchema, any>(
  'USER_LOGS_IN',
);
