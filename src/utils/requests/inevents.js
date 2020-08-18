import axios from "axios";

import { MY_EVENT_COSTS_API, EVENT_COSTS_API, EVENT_COST_API } from "../api";

export function requestMyEventCosts(token, id) {
  return axios.get(MY_EVENT_COSTS_API(id), {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestPostEventCost(token, id, data) {
  return axios.post(EVENT_COSTS_API(id), data, {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestFetchDebt(token, id) {
  return axios.get(EVENT_COSTS_API(id), {
    headers: {
      Authorization: "Token " + token,
    },
  });
}

export function requestDeleteCost(token, id) {
  return axios.delete(EVENT_COST_API(id), {
    headers: {
      Authorization: "Token " + token,
    },
  });
}