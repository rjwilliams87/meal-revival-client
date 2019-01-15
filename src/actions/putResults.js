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
