export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS"


export function fetchProfileSuccess(data) {
    return {
        type : FETCH_PROFILE_SUCCESS,
        data
    }
}