import { RootState } from '../../../../redux';
import { UserInfo } from '../../../Models/interfaces';

export const getUserInfoSelect = (state: RootState): UserInfo =>
  state.mainPage.user;
