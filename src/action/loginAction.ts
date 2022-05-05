import { actionCreatorFactory } from "typescript-fsa";
import { Login } from "../types";

const actionCreator = actionCreatorFactory();

export const LoginActions = {
    goToLogin: actionCreator<Login>('GO_TO_LOGIN'),
    fetchLoginUserInfo: actionCreator<Login>('FETCH_LOGIN_USER_INFO'),
}
