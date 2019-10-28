import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true, // для работы с cookies
    baseURL: 'http://localhost:9000/',
    headers: {'Content-Type': 'application/json'},
    mode: 'no-cors'
});

export const authApi = {
    registration(phone, email, password) {
        console.log("in api");
        console.log({phone, email, password});
        return instance.post('api/account/registration', {phone, email, password});
    },

    // with cookie
    authMe() {
        return instance.get('', {withCredentials: true}).then(response => {
            return response.data
        });
    },

    login(email, password) {
        return instance.post(`api/account/login`, {email, password});
    },

    loginOut() {
        return instance.delete(`auth/login`);
    }
};
