export const LOGIN_SUCCESS = "LOGIN_SUCCESS"


export function successLogin(token) {
    return {
        type : LOGIN_SUCCESS,
        token
    }
}