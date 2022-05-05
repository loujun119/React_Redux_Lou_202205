import { actionCreatorFactory } from "typescript-fsa";
import { Student } from "../types";

const actionCreator = actionCreatorFactory();

export const StudentActions = {
  getStudentDataInfo: actionCreator<void>("GET_STUDENT_DATA_INFO"),
  fetchStudentDataToStore: actionCreator<Student[]>(
    "FETCH_STUDENT_DATA_TO_STORE"
  ),
};
