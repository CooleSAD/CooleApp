import { initialState } from './index';
import { LOGIN_SUCCESS } from '../actions/login';
import { LOGOUT_SUCCESS } from '../actions/logout'


export function loginReducer(state = initialState.login, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            console.log("login success action");
            return Object.assign({}, state, {token : action.token, success : true})
        case LOGOUT_SUCCESS:
            console.log("logout success action");
            return Object.assign({}, state, {token : '', success : false})
        default :
            return state
    }
}