export const DELETE_DONATION_SUCCESS = "DELETE_DONATION_SUCCESS";
export const deleteDonationSuccess = () => ({
  type: DELETE_DONATION_SUCCESS
});

export const DELETE_DONATION_ERROR = "DELETE_DONATION_ERROR";
export const deleteDonationError = err => ({
  type: DELETE_DONATION_ERROR,
  err
});
