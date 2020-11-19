import { get, post, put } from './request';

export const postSignup = (email, password) => 
  post('/api/v1/signup', { email, password });

export const postLogin = (email, password) =>
  post('/api/v1/login', { email, password });

export const getVerify = () => 
  get('/api/v1/verify');

export const updateUser = (user) => 
  put('/api/v1/users', user);


