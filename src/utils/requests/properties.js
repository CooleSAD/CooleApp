import axios from "axios";

import { MYPROPERTIES_API, PROPERTIES_API, PROPERTY_API } from "../api";

export function requestMyProperties(token) {
  return axios.get(MYPROPERTIES_API, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestProperties(token) {
  return axios.get(PROPERTIES_API, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestReserveProperty(token, id) {
  return axios.post(PROPERTY_API(id), null, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}
