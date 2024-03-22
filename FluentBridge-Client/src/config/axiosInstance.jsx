import axios from "axios";
import BASE_URL from '../config/ApiConfig.jsx';

const instance = axios.create({
    baseURL: BASE_URL
});

instance.interceptors.request.use(
    (config) => {
        let token = document.cookie.split('; ')
            .find(record => record.startsWith('token=')) || null;
        token = token?.split('=')[1];
        config.headers.Authorization = token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;