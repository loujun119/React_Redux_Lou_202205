import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";

import * as AppUser from "./userReducer";
import * as AppStudent from "./studentReducer";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ...AppUser,
    ...AppStudent,
  });

export default createRootReducer;
