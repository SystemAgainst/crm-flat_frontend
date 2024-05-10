import instance from "@/api/http";


export const loginUser = (payload) => instance.post(`user/login`, payload);

export const checkUser = (payload) => instance.post(`user/check`, payload);

export const registerUser = (payload) => instance.post(`user/register`, payload);
