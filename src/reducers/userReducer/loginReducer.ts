import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { LoginActions } from '../../action';
import { Login } from '../../types';

const initialState: Login = {
    userName: '',
};

export const login = reducerWithInitialState<Login>(initialState)
  .case(LoginActions.fetchLoginUserInfo, (state, payload) =>
    Object.assign({},state, {
        ...state,
        userName: payload,
    })
  )
.build();