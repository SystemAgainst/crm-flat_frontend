import axios from "axios";
import config from "@/config/index.js";
import { useAuthStore } from "@/store/authStore.js";


const instance = axios.create({
    baseURL: config.apiBaseURI,
    headers: {
        "Content-Type": "application/json",
    },
});

const get = (uri, requestConfig = {}) => {
    return instance.get(`${config.apiBaseURI}/${uri}`, {
        ...requestConfig,
    });
};

const post = (uri, data, requestConfig = {}) => {
    return instance.post(`${config.apiBaseURI}/${uri}`, data, {
        ...requestConfig,
    });
};

const put = (uri, data, requestConfig = {}) => {
    return instance.put(`${config.apiBaseURI}/${uri}`, data, {
        ...requestConfig,
    });
};

const remove = (uri, requestConfig = {}) => {
    return instance.delete(`${config.apiBaseURI}/${uri}`, {
        ...requestConfig,
    });
};

const patch = (uri, data = {}, requestConfig = {}) => {
    return instance.patch(`${config.apiBaseURI}/${uri}`, data, {
        ...requestConfig,
    });
};

const request = (requestConfig) => {
    return instance.request(requestConfig);
};

// Перехватчик для добавления JWT токена в каждый исходящий запрос
instance.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    const token = authStore.getToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default {
    instance,
    get,
    post,
    put,
    remove,
    request,
    patch,
};
