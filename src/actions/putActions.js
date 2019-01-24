import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";
import store from "../store";

export const PUT_REQUEST = "PUT_REQUEST";
export const putRequest = () => ({
  type: PUT_REQUEST
});

export const COMPLETE_PROFILE_SUCCESS = "COMPLETE_PROFILE_SUCCESS";
export const completeProfileSuccess = () => ({
  type: COMPLETE_PROFILE_SUCCESS
});

export const COMPLETE_PROFILE_ERROR = "COMPLETE_PROFILE_ERROR";
export const completeProfileError = error => ({
  type: COMPLETE_PROFILE_ERROR,
  error
});

export const completeUserProfile = (
  phone,
  about,
  companyName,
  contactName,
  profileComplete
) => dispatch => {
  const id = store.getState().auth.currentUser.id;
  const token = localStorage.getItem("authToken");
  dispatch(putRequest());
  return fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      phone,
      about,
      companyName,
      contactName,
      profileComplete
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => dispatch(completeProfileSuccess(res)))
    .catch(err => dispatch(completeProfileError(err)));
};
