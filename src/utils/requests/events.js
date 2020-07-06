import axios from "axios";

import { EVENTS_API } from "../api";

export function requestEvents(token) {
  return axios.get(EVENTS_API, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}
