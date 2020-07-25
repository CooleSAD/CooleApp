import axios from "axios";

import { EVENTS_API, EVENT_API, MYEVENTS_API } from "../api";

export function requestEvents(token) {
  return axios.get(EVENTS_API, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestMyEvents(token) {
  return axios.get(MYEVENTS_API, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestEvent(token, id) {
  return axios.get(EVENT_API(id), {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestEnrollEvent(token, id) {
  return axios.post(EVENT_API(id),
  null,
  {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestCancelEnrollEvent(token, id) {
  return axios.delete(EVENT_API(id),
  {
    headers: {
      Authorization: "Token " + token,
    },
  });
}