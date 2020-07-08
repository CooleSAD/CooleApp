import { combineReducers } from 'redux';

import { loginReducer } from './login';
import { homeReducer } from './home';
import { profileReducer } from './profile';

const cooleApp = combineReducers({
    loginReducer,
    homeReducer,
    profileReducer
})

export default cooleApp