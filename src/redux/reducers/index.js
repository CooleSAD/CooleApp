import { combineReducers } from 'redux';

import { loginReducer } from './login';

export const initialState = {
    login : {
        loading : false,
        success : false,
        error : false,
        token : ''
    },
    signup : {
        loading : false,
        success : false,
        error : false,
    }
    
}

const cooleApp = combineReducers({
    loginReducer,
})

export default cooleApp