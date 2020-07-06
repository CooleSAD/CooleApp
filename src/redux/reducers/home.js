import { initialState } from './initialState';
import { EVENTS_LOADING, EVENTS_LOADED, EVENTS_ERROR } from '../actions/home';

export function homeReducer(state = initialState.home, action) {
    switch(action.type) {
        case EVENTS_LOADING:
            return Object.assign({}, state, {eventsLoading : true, eventsError : false, eventsLoaded : false})
        case EVENTS_LOADED:
            return Object.assign({}, state, {eventsLoading : false, eventsError : false, eventsLoaded : true})
        case EVENTS_ERROR:
            return Object.assign({}, state, {eventsLoading : false, eventsError : true, eventsLoaded : true})
        default:
            return state
    }
}