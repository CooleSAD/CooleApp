import axios from "axios";

import { NEEDS_API, NEED_API } from "../api";

export function requestNeeds(token) {
  return axios.get(NEEDS_API, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestPostNeed(token, data) {
  return axios.post(NEEDS_API, data, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestDeleteNeed(token, id) {
  return axios.delete(NEED_API(id), {
    headers: {
      Authorization: "Token " + token,
    },
  });
}