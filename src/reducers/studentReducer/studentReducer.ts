import { reducerWithInitialState } from "typescript-fsa-reducers";
import { StudentActions } from "../../action/studentAction";
import { Student } from "../../types";

const initialState: Student[] = [];

export const studentsInfo = reducerWithInitialState<Student[]>(initialState)
  .case(StudentActions.fetchStudentDataToStore, (state, payload) =>
    Object.assign({}, state, {
      ...state,
      ...payload,
    })
  )
  .build();
