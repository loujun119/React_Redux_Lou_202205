import { RouterState } from 'connected-react-router';

export interface AppStore {
  user: User;
  students: Students;
  router: RouterState;
}

export interface User {
  login: Login;
  userInfo: UserInfo;
}

export interface Login {
  isLogged: boolean;
  userName: string;
  password?: string;
}

export interface UserInfo {
  userName: string;
  userId: string;
}

export interface Students {
  studentsInfo: Student[];
}

export interface Student {
  id: string;
  name: string;
  age: number;
  birthday: string;
  address: string;
  email: string;
}
