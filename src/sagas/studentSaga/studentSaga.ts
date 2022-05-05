import { Action } from 'typescript-fsa';
import { call, put, takeLatest, fork } from 'redux-saga/effects';

import { Student } from '../../types';
import { StudentActions } from '../../action';

function* getStudentData(){
    yield console.log('this is login Student:');
}

export const watchStudentSaga =[
    takeLatest(StudentActions.getStudentDataInfo, getStudentData),
]