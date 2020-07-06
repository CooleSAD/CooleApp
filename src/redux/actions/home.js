export const EVENTS_LOADING = "EVENTS_LOADING"
export const EVENTS_LOADED = "EVENTS_LOADED"
export const EVENTS_ERROR = "EVENTS_ERROR"

export function eventsLoading() {
    return {
        type : EVENTS_LOADING
    }
}

export function eventsLoaded() {
    return {
        type : EVENTS_LOADED
    }
}

export function eventsError() {
    return {
        type : EVENTS_ERROR
    }
}
