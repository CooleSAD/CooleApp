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
    },
    home : {
        eventsLoading : false,
        eventsLoaded : false,
        eventsError : false,
        navigatedEvent : ''
    },
    profile : {
        data : {
            
        }
    }
}