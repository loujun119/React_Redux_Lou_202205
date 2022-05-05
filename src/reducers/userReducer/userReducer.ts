import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { UserActions } from '../../action/userAction';
import { UserInfo } from '../../types';

const initialState: UserInfo = {
    userName: '',
    userId: '',
};

export const userInfo = reducerWithInitialState<UserInfo>(initialState)
  .case(UserActions.fetchUserInfo, (state, payload) =>
    Object.assign({},state, {
        ...state,
        userName: payload.userName,
        userId: payload.userId,
    })
  )
.build();