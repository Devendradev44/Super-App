export interface User {
  name: string;
  username: string;
  email: string;
  mobile: string;
}

export interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
}