import axios from "axios";
import { APIS } from "../apiLog/api";
import { JoinWaitlistTypes } from "../types/waitlist";

export const joinWaitlist = (data: JoinWaitlistTypes) => {
  return new Promise((resolve, reject) => {
    axios.post(APIS.WAITLIST.JOIN, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getProviders = () => {
  return new Promise((resolve, reject) => {
    axios.get(APIS.GET_PROVIDERS)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
