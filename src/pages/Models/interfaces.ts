import { OpenWindowType, TypeDrawing } from './enum';
export interface IRegisterUserSchema {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmationPassword: string;
  organizationId: number;
}

export interface IAuthUserSchema {
  email: string;
  password: string;
}

export interface IReducerShape {
  openWindow: OpenWindowType;
  imageCanvasUrl: string;
  typeDrawing: TypeDrawing;
  subscribers: string[];
  subscriptions: string[];
  user: UserInfo;
  organizationsList: IOrganizations[];
  listUsers: Array<{
    id: string;
    allName: string;
    email: string;
  }>;
}

export interface IAuthShape {
  registerUserSchema: IRegisterUserSchema;
  authUserSchema: IAuthUserSchema;
  isEnter: boolean;
  isLoginPage: boolean;
  isRegisterForm: boolean;
  userInfo: any;
}

export interface IFiles {
  idFile: string;
  fileName: string;
  idUser: string;
  creator: string;
}

export interface UserInfo {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  organizationId: number;
  files?: IFiles[];
  dateOfBirth?: string;
  experience?: number;
  subscribersIds?: string[];
  subscriptionsIds?: string[];
  avatarUrl?: string;
}

export interface IOrganizations {
  id: string;
  nameOrganization: string;
}
