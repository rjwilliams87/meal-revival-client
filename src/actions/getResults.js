export const GET_ALL_DONATIONS_SUCCESS = "GET_ALL_DONATIONS_SUCCESS";
export const getAllDonationsSuccess = donations => ({
  type: GET_ALL_DONATIONS_SUCCESS,
  donations
});

export const GET_ALL_DONATIONS_ERROR = "GET_ALL_DONATIONS_ERROR";
export const getAllDonationsError = err => ({
  type: GET_ALL_DONATIONS_ERROR,
  err
});

export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const getUserInfoSuccess = user => ({
  type: GET_USER_INFO_SUCCESS,
  user
});

export const GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR";
export const getUserInfoError = err => ({
  type: GET_ALL_DONATIONS_ERROR,
  err
});
