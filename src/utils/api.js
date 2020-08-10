export const BASE_ADDRESS = "http://192.168.1.7:8000"
export const SIGNUP_API = BASE_ADDRESS + "/auth/users/"
export const LOGIN_API = BASE_ADDRESS + "/auth/token/login/"
export const LOGOUT_API = BASE_ADDRESS + "/auth/token/logout/"
export const EVENTS_API = BASE_ADDRESS + "/events/"
export const MYEVENTS_API = BASE_ADDRESS + "/events/me/"
export const PROFILE_API = BASE_ADDRESS + "/users/me/"
export const EVENT_API = (id) => BASE_ADDRESS + `/events/${id}/`
export const MYPROPERTIES_API = BASE_ADDRESS + "/properties/me/"
export const PROPERTIES_API = BASE_ADDRESS + "/properties/"
export const PROPERTY_API = (id) => BASE_ADDRESS + `/properties/${id}/`