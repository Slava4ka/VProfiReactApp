import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true, // для работы с cookies
    baseURL: 'https://localhost:9000/'
});

export const authApi = {
    authMe() {
        return instance.get('', {withCredentials: true}).then(response => {
            return response.data
        });
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    loginOut() {
        return instance.delete(`auth/login`);
    }
};
