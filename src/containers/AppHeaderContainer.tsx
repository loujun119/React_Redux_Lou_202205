import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AppHeader from "../components/AppHeader";
import { AppStore } from "../types/index";
import { UserActions } from "../action/userAction";

const useStateProps = () => {
  const userName: string = useSelector<AppStore, string>(
    ({ user }: AppStore) => user.userInfo.userName
  );

  return {
    userName,
  };
};

const useDispatchProps = () => {
  const dispatch = useDispatch<any>();

  const userInfoData = React.useCallback(
    (payload: any) => {
      dispatch(UserActions.fetchUserInfo(payload));
    },
    [dispatch]
  );

  return {
    action: {
        userInfoData,
    },
  };
};

export type AppHeaderProps = ReturnType<typeof useStateProps> & ReturnType<typeof useDispatchProps>;

export const AppHeaderContainer = () => {
    const props = {
        ...useStateProps(),
        ...useDispatchProps(),
    };

    return <AppHeader {...props}/>
}

