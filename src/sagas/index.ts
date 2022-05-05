import { all } from 'redux-saga/effects';
import watchAppLogin from './loginSaga';
import watchAppStudent from './studentSaga';

export default function* rootSaga() {
    yield all([
        ...watchAppLogin,
        ...watchAppStudent,
    ]);
}