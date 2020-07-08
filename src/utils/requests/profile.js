import axios from "axios";

import { PROFILE_API } from "../api";

export function requestFetchProfile(token) {
  return axios.get(PROFILE_API, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestEditProfile(token, data) {
  return axios.put(PROFILE_API, data, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}
