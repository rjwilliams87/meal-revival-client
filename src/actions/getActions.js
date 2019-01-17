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

export const GET_USER_DONATIONS_SUCCESS = "GET_USER_DONATIONS_SUCCESS";
export const getUserDonationsSuccess = donations => ({
  type: GET_USER_DONATIONS_SUCCESS,
  donations
});

export const GET_USER_DONATIONS_ERROR = "GET_USER_DONATIONS_ERROR";
export const getUserDonationsError = error => ({
  type: GET_USER_DONATIONS_ERROR,
  error
});

export const getUserInfo = id => dispatch => {
  dispatch(getRequest());
  return fetch(`${API_BASE_URL}/users/${id}`, {
    method: "GET"
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => dispatch(getUserInfoSuccess(res)))
    .catch(err => dispatch(getUserInfoError(err)));
};

export const getUserDonations = id => dispatch => {
  return fetch(`${API_BASE_URL}/donations/${id}`, {
    method: "GET"
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      return res.json();
    })
    .then(res => {
      dispatch(getUserDonationsSuccess(res));
    })
    .then(err => dispatch(getUserDonationsError(err)));
};

export const getAllDonations = () => dispatch => {
  return fetch(`${API_BASE_URL}/donations`, {
    method: "GET"
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => dispatch(getAllDonationsSuccess(res)))
    .catch(err => dispatch(getAllDonationsError(err)));
};
