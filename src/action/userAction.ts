import { actionCreatorFactory } from "typescript-fsa";
import { UserInfo } from "../types";

const actionCreator = actionCreatorFactory();

export const UserActions = {
    fetchUserInfo: actionCreator<UserInfo>('FETCH_USER_INFO'),
}
