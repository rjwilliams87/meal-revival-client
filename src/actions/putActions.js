import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

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

export const completeUserProfile = (getState, values) => dispatch => {
  const id = getState().currentUser.id;
  const authToken = getState().authToken;
  dispatch(putRequest());
  return fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PUT",
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
    body: JSON.stringify(values)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => dispatch(completeProfileSuccess()))
    .catch(err => dispatch(completeProfileError(err)));
};
