import instance from "@/api/http";


export const loginClient = (payload) => instance.post(`client/login`, payload);

export const createClient = (payload) => instance.post(`client/add`, {
	...payload,
	apartmentId: +payload.apartmentId,
});

export const getListClients = () => instance.get(`client/list`);
