import axios from 'axios';

import { SIGNUP_API } from '../api';

export function requestSignup(data) {
    return axios.post(SIGNUP_API, data);
}