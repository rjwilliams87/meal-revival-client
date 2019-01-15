export const COMPLETE_PROFILE_SUCCESS = "COMPLETE_PROFILE_SUCCESS";
export const completeProfileSuccess = (
  profileComplete,
  about,
  phone,
  address,
  coords
) => ({
  type: COMPLETE_PROFILE_SUCCESS,
  about,
  phone,
  address,
  coords,
  profileComplete
});

export const COMPLETE_PROFILE_ERROR = "COMPLETE_PROFILE_ERROR";
export const completeProfileError = error => ({
  type: COMPLETE_PROFILE_ERROR,
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

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  user
});

export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const signInError = error => ({
  type: SIGN_IN_ERROR,
  error
});

export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
});

export const LOG_OUT_ERROR = "LOG_OUT_ERROR";
export const logOutError = error => ({
  type: LOG_OUT_ERROR,
  error
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
