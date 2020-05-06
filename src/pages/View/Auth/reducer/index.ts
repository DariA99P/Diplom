import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';
import { IAuthShape } from '../../../Models/interfaces';

const initialState: IAuthShape = {
  registerUserSchema: null,
  authUserSchema: null,
  isEnter: false,
  isLoginPage: true,
  isRegisterForm: false,
  userInfo: null,
};

export default reducerWithInitialState<IAuthShape>(initialState)
  .case(
    actions.enterUserInfo.started,
    (state): IAuthShape => ({
      ...state,
      isEnter: true,
      isLoginPage: false,
    }),
  )
  .case(actions.userLogsIn.done, (state, payload) => ({
    ...state,
    userInfo: payload,
  }))
  .case(actions.changeStatusForm, state => ({
    ...state,
    isRegisterForm: !state.isRegisterForm,
  }));
