import { combineReducers } from 'redux';

import { loginReducer } from './login';
import { homeReducer } from './home';

const cooleApp = combineReducers({
    loginReducer,
    homeReducer
})

export default cooleApp