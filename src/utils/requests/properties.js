import axios from "axios";

import { MYPROPERTIES_API } from "../api";

export function requestMyProperties(token) {
  return axios.get(MYPROPERTIES_API, {
    headers: {
      Authorization: "Token " + token,
    },
  })
}