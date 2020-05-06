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
