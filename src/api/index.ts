import axios from 'axios';
import {
  IAuthUserSchema,
  IRegisterUserSchema,
} from '../pages/Models/interfaces';

axios.defaults.baseURL = 'http://localhost:8080';

export const registerUser = (user: IRegisterUserSchema) =>
  axios.post('/users/register', user);

export const loginUser = (user: IAuthUserSchema) =>
  axios.post('/users/login', user);

export const processDrawingAPI = (vector: number[]) =>
  axios.put('/process', vector);

export const getUsersApi = () => axios.get('/users/listUsers');

export const getUserInfoApi = (id: string) => axios.get(`/users/${id}`);

export const saveImageApi = (
  idUser: string,
  variables: { fileName: string; creator: string; dateOfCreation: number },
) => axios.put(`/save/${idUser}`, variables);

export const removeImageApi = (idFile: string, idUser: string) =>
  axios.put(`/remove/${idFile}`, { idUser });

export const getOrganizationListApi = () => axios.get('/organizationsList');

export const subscribersToUsersApi = (idUser: string, subscribers: string[]) =>
  axios.put(`/users/subscribers/${idUser}`, { subscriptionsIds: subscribers });
