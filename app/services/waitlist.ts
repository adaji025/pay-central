import axios from "axios";
import AxoisApi from "../apiLog";
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
