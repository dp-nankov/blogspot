import * as request from './requester';

const baseUrl = 'http://localhost:3003/api';

export const getAll = () => request.get(`${baseUrl}/ads`);