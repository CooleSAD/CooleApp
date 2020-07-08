import { FETCH_PROFILE_SUCCESS } from '../actions/profile';
import { initialState } from "./initialState";
import { cos } from 'react-native-reanimated';

export function profileReducer(state = initialState.profile, action) {
    switch(action.type) {
        case FETCH_PROFILE_SUCCESS:
            console.log("fetch profile success action")
            return Object.assign({}, state, {data : action.data})
        default:
            return state
    }
}