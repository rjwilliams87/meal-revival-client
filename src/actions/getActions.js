import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const GET_REQUEST = "GET_REQUEST";
export const getRequest = () => ({
  type: GET_REQUEST
});

export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const getUserInfoSuccess = user => ({
  type: GET_USER_INFO_SUCCESS,
  user
});

export const GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR";
export const getUserInfoError = error => ({
  type: GET_ALL_DONATIONS_ERROR,
  error
});

export const GET_ALL_DONATIONS_SUCCESS = "GET_ALL_DONATIONS_SUCCESS";
export const getAllDonationsSuccess = donations => ({
  type: GET_ALL_DONATIONS_SUCCESS,
  donations
});

export const GET_ALL_DONATIONS_ERROR = "GET_ALL_DONATIONS_ERROR";
export const getAllDonationsError = error => ({
  type: GET_ALL_DONATIONS_ERROR,
  error
});

export const getUserInfo = id => dispatch => {
  dispatch(getRequest());
  return fetch(`${API_BASE_URL}/users/${id}`, {
    method: "GET",
    "Content-Type": "application/json",
    body: JSON.stringify(id)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(user => dispatch(getUserInfoSuccess(user)))
    .catch(err => dispatch(getUserInfoError(err)));
};

export const getAllDonations = () => dispatch => {
  return fetch(`${API_BASE_URL}/donations`, {
    method: "GET"
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(donations => dispatch(getAllDonationsSuccess(donations)))
    .catch(err => dispatch(getAllDonationsError(err)));
};
