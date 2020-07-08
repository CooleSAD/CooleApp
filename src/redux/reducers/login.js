import { initialState } from './initialState';
import { LOGIN_SUCCESS } from '../actions/login';
import { LOGOUT_SUCCESS } from '../actions/logout'


export function loginReducer(state = initialState.login, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {token : action.token, success : true})
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {token : '', success : false})
        default :
            return state
    }
}