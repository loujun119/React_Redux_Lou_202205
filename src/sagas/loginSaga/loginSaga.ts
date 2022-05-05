import { Action } from 'typescript-fsa';
import { call, put, takeLatest, fork } from 'redux-saga/effects';

import { Login } from '../../types';
import { LoginActions } from '../../action';

function* goToLogin({ payload }: Action<Login>){
    yield console.log('this is login saga:' + payload);
}

export const watchLoginSaga =[
    takeLatest(LoginActions.goToLogin, goToLogin),
]