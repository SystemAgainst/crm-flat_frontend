import instance from "@/api/http";


export const loginUser = (payload) => instance.post(`lessor/login`, payload);

export const checkUser = (payload) => instance.post(`lessor/check`, payload);

export const registerUser = (payload) => instance.post(`lessor/register`, payload);

export const getListClients = () => instance.get(`lessor/list-clients`);
