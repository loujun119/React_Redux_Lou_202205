import { combineReducers } from "redux";
import { Students } from "../../types";

import * as StudentsReducers from './studentReducer';

export const students = combineReducers<Students>({
    ...StudentsReducers,
});