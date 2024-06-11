import instance from "@/api/http";

export const getAllApartments = () => instance.get(`apartment/list`);
export const getApartmentById = (id) => instance.get(`apartment/${id}`);
export const removeApartmentById = (id) => instance.remove(`apartment/${id}`);
export const create = (data) => instance.post(`apartment/create`, data);
