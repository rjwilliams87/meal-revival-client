import { normalizeResponseErrors } from "./utils";
import { SubmissionError } from "redux-form";
import { API_BASE_URL } from "../config";

export const POST_REQUEST = "POST_REQUEST";
export const postRequest = () => ({
  type: POST_REQUEST
});

export const CREATE_NEW_USER_SUCCESS = "CREATE_NEW_USER_SUCCESS";
export const createNewUserSuccess = user => ({
  type: CREATE_NEW_USER_SUCCESS,
  user
});

export const CREATE_NEW_USER_ERROR = "CREATE_NEW_USER_ERROR";
export const createNewUserError = error => ({
  type: CREATE_NEW_USER_ERROR,
  error
});

export const ADD_DONATION_SUCCESS = "ADD_DONATION_SUCCESS";
export const addDonationSuccess = donation => ({
  type: ADD_DONATION_SUCCESS,
  donation
});

export const ADD_DONATION_ERROR = "ADD_DONATION_ERROR";
export const addDonationError = error => ({
  type: ADD_DONATION_ERROR,
  error
});

export const createNewUser = user => dispatch => {
  console.log("running createNewUser from actions");
  return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => createNewUserSuccess(res))
    .catch(err => {
      const { code } = err;
      const message =
        code === 422 ? err.message : "Unable to register, please try again";
      dispatch(createNewUserError(message));
      return Promise.reject(
        new SubmissionError({
          _error: message
        })
      );
    });
};

export const addUserDonation = (expiry, info, delivery) => dispatch => {
  const token = localStorage.getItem("authToken");
  return fetch(`${API_BASE_URL}/donations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ expiry, info, delivery })
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
