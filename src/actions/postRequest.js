import {
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_ERROR,
  createNewUserSuccess,
  createNewUserError,
  signInSuccess,
  signInError,
  addDonationSuccess
} from "./PostResults";
import { normalizeResponseErrors } from "./utils";
import { SubmissionError } from "redux-form";
import { API_BASE_URL } from "../config";

export const createNewUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === "ValidationError") {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

export const addUserDonation = (
  expiry,
  info,
  delivery,
  getState
) => dispatch => {
  const authToken = getState().authToken;
  return fetch(`${API_BASE_URL}/donations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
      body: JSON.stringify({ expiry, info, delivery })
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => dispatch(addDonationSuccess(res)))
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === "ValidationError") {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};
