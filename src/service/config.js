import axios from 'axios';

const configure = {
    local: import.meta.env.VITE_APIURL // Desenvolvimento
};

const http = axios.create({
    baseURL: configure.local,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
    }
});

http.interceptors.request.use(
    function (config) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        config.headers.Authorization = (user != null && user.token != null) ? "Bearer " + user.token : '';
        return config;
    }
);

export default http;