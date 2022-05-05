import { watchStudentSaga } from "./studentSaga";

const watchAppStudent = [
    ...watchStudentSaga,
]

export default watchAppStudent;