import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true, // для работы с cookies
    baseURL: 'http://localhost:9000/',
    headers: {'Content-Type': 'application/json'},
    mode: 'no-cors'
});

export const authApi = {

    registration(phone, email, password) {
        return instance.post('api/account/registration', {phone, email, password});
    },

    /**
     * using cookie
     * @returns {*}
     */

    checkAuth() {
        return instance.get('/api/test');
    },

    /**
     * using cookie
     * @param userIdentifier (email or telephone number)
     * @param password
     * @returns {Q.Promise<any> | void | Promise<AxiosResponse<T>> | Observable<AjaxResponse> | any}
     */

    login(userIdentifier, password) {
        return instance.post(`api/account/login`, {login: userIdentifier, password});
    },

    loginOut() {
        return instance.get(`api/account/logout`);
    }


};
