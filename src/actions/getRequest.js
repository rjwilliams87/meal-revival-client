import {
  getUserInfoError,
  getUserInfoSuccess,
  getAllDonationsSuccess,
  getAllDonationsError
} from "./getResults";
import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const GET_REQUEST = "GET_REQUEST";
export const getRequest = () => ({
  type: GET_REQUEST
});

export const getUserInfo = getState => dispatch => {
  const id = getState().currentUser.id;
  dispatch(getRequest());
  fetch(`${API_BASE_URL}/users/${id}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(user => dispatch(getUserInfoSuccess(user)))
    .catch(err => dispatch(getUserInfoError(err)));
};

export const getAllDonations = () => dispatch => {
  fetch(`${API_BASE_URL}/donations`)
    .then(res => {
      if (!res.ok) {
        Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(donations => dispatch(getAllDonationsSuccess(donations)))
    .catch(err => dispatch(getAllDonationsError(err)));
};
