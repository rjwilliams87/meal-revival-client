import { isAbsolute } from "path";
import * as sync_actions from "./sync";
import * as get_actions from "./getResults";
import * as delete_actions from "./deleteResults";
import * as post_actions from "./PostResults";
import * as put_actions from "./putResults";
import * as auth_actions from "./auth";

export {
  sync_actions,
  get_actions,
  delete_actions,
  put_actions,
  post_actions,
  auth_actions
};

//temporary get user request
export const getUserInfo = user => dispatch => {
  dispatch(get_actions.getUserInfoSuccess(user));
};
