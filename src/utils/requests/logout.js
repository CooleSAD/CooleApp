import axios from "axios";

import { LOGOUT_API } from "../api";

export function requestLogout(token) {
  return axios.post(
    LOGOUT_API,
    null,
    {
      headers: {
        Authorization: "Token " + token,
      },
    }
  );
}
