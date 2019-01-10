export const CHANGE_COORDS = "CHANGE_COORDS";
export const changeCoords = coords => ({
  type: CHANGE_COORDS,
  coords
});

//post results
//called on successful async
export const ADD_DONATION_SUCCESS = "ADD_DONATION_SUCCESS";
export const addDonationSuccess = donation => ({
  type: ADD_DONATION_SUCCESS,
  donation
});

export const ADD_DONATION_ERROR = "ADD_DONATION_ERROR";
export const addDonationError = err => ({
  type: ADD_DONATION_ERROR,
  err
});

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const signInSucces = user => ({
  type: SIGN_IN_SUCCESS,
  user
});

export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const signInError = err => ({
  type: SIGN_IN_ERROR,
  err
});

export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
});

export const LOG_OUT_ERROR = "LOG_OUT_ERROR";
export const logOutError = err => ({
  type: LOG_OUT_ERROR,
  err
});

export const CREATE_NEW_USER_SUCCESS = "CREATE_NEW_USER_SUCCESS";
export const createNewUserSuccess = user => ({
  type: CREATE_NEW_USER_SUCCESS,
  user
});

export const CREATE_NEW_USER_ERROR = "CREATE_NEW_USER_ERROR";
export const createNewUserError = err => ({
  type: CREATE_NEW_USER_ERROR,
  err
});

//put results called after async action
export const UPDATE_DONATION_DETAILS_SUCCESS =
  "UPDATE_DONATION_DETAILS_SUCCESS";
export const updateDonationDetailsSuccess = donation => ({
  type: UPDATE_DONATION_DETAILS_SUCCESS,
  donation
});

export const UPDATE_DONATION_DETAILS_ERROR = "UPDATE_DONATION_DETAILS_ERROR";
export const updateDonationDetailsError = err => ({
  type: UPDATE_DONATION_DETAILS_ERROR,
  err
});

//get request
// export const getUserInfo = () => dispatch => {
//   fetch(`${API_BASE_URL}/users`)
//     .then(res => {
//       if (!res.ok) {
//         Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(user => dispatch(getUserInfoSuccess(user)));
// };

//temporary get user request
export const getUserInfo = user => dispatch => {
  dispatch(getUserInfoSuccess(user));
};

//get results called after async action
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

//delete results called after async delete request
export const DELETE_DONATION_SUCCESS = "DELETE_DONATION_SUCCESS";
export const deleteDonationSuccess = () => ({
  type: DELETE_DONATION_SUCCESS
});

export const DELETE_DONATION_ERROR = "DELETE_DONATION_ERROR";
export const deleteDonationError = err => ({
  type: DELETE_DONATION_ERROR,
  err
});
