import * as request from './requester';

const baseUrl = 'http://localhost:3003/api';

export const getAll = () => request.get(`${baseUrl}/ads`);
export const getOne = (customId) => request.get(`${baseUrl}/ads/custom/${customId}`);
export const edit = (adId, data) =>  request.put(`${baseUrl}/ads/edit/${adId}`, {...data});
export const create = (data) =>  request.post(`${baseUrl}/ads`, {...data});
export const del = (adId) => request.del(`${baseUrl}/ads/${adId}`);
