import { combineReducers } from "redux";
import { User } from "../../types";

import * as LoginReducers from './loginReducer';
import * as UserInfoReducers from './userReducer';

export const user = combineReducers<User>({
    ...LoginReducers,
    ...UserInfoReducers,
});