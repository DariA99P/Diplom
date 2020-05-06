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
}

export interface IAuthShape {
  registerUserSchema: IRegisterUserSchema;
  authUserSchema: IAuthUserSchema;
  isEnter: boolean;
  isLoginPage: boolean;
  isRegisterForm: boolean;
  userInfo: any;
}
