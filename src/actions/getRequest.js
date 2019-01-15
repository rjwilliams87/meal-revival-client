import {
  getUserInfoError,
  getUserInfoSuccess,
  getAllDonationsSuccess,
  getAllDonationsError
} from "./getResults";

export const getUserInfo = id => dispatch => {
  fetch(`${API_BASE_URL}/users/${id}`)
    .then(res => {
      if (!res.ok) {
        Promise.reject(res.statusText);
      }
      return res.json();
    })
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
