export const EVENTS_LOADING = "EVENTS_LOADING"
export const EVENTS_LOADED = "EVENTS_LOADED"
export const EVENTS_ERROR = "EVENTS_ERROR"
export const NAVIGATE_TO_EVENT = "NAVIGATE_TO_EVENT"

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

export function navigateToEvent(eventTitle) {
    return {
        type : NAVIGATE_TO_EVENT,
        eventTitle
    }
}