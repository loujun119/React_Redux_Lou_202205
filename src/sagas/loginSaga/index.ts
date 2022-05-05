import { watchLoginSaga } from "./loginSaga";

const watchAppLogin = [
    ...watchLoginSaga,
]

export default watchAppLogin;