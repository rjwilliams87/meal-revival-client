import axios from "axios";

const HERE_APP_ID = process.env.REACT_APP_HEREAPPID;
const HERE_APP_CODE = process.env.REACT_APP_HEREAPPCODE;

export const getLocationSuggestions = query => {
  axios
    .get("https://autocomplete.geocoder.api.here.com/6.2/suggest.json", {
      params: {
        app_id: HERE_APP_ID,
        app_code: HERE_APP_CODE,
        query: query,
        maxresults: 3
      }
    })
    .then(res => res);
};
