import actionCreatorFactory from 'typescript-fsa';
import {
  IAuthUserSchema,
  IOrganizations,
  IRegisterUserSchema,
  UserInfo,
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

export const initializeData = actionCreator.async<
  void,
  {
    user: UserInfo;
    organizationsList: IOrganizations[];
    listUsers: Array<{
      id: string;
      allName: string;
      email: string;
    }>;
  }
>('INITIALIZE_TAB');

export const getOrganizationsList = actionCreator.async<void, IOrganizations[]>(
  'GET_ORGANIZATIONS_LIST',
);
