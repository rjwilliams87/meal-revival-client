import { API_BASE_URL } from "../config";
import { normalize } from "path";
import { normalizeResponseErrors } from "./utils";
import store from "../store";

export const DELETE_DONATION_SUCCESS = "DELETE_DONATION_SUCCESS";
export const deleteDonationSuccess = () => ({
  type: DELETE_DONATION_SUCCESS
});

export const DELETE_DONATION_ERROR = "DELETE_DONATION_ERROR";
export const deleteDonationError = err => ({
  type: DELETE_DONATION_ERROR,
  err
});

export const DELETE_REQUEST = "DELETE_REQUEST";
export const deleteRequest = () => ({
  type: DELETE_REQUEST
});

export const deleteDonation = id => dispatch => {
  const token = localStorage.getItem("authToken");
  dispatch(deleteRequest());
  return fetch(`${API_BASE_URL}/donations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => dispatch(deleteDonationSuccess()))
    .catch(err => {
      dispatch(deleteDonationError(err));
    });
};
