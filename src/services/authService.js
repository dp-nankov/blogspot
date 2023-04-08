import * as request from './requester';

const baseUrl = 'http://localhost:3003/api';

export const login = (loginData) => request.post(`${baseUrl}/login`, loginData);
export const signup = (signupData) => request.post(`${baseUrl}/register`, signupData);
export const logout = () => request.post(`${baseUrl}/logout`, {});
export const getUser = () => request.get(`${baseUrl}/users/profile`);
export const getUserById = (userId) => request.get(`${baseUrl}/users/profile/${userId}`);

