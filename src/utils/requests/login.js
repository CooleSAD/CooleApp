import axios from 'axios';

import { LOGIN_API } from '../api';

export function requestLogin(data) {
    return axios.post(LOGIN_API, data);
}