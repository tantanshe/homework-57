export interface User {
  id: string;
  name: string;
  email: string;
  activity: boolean;
  role: string;
}

export interface UserMutation {
  name: string;
  email: string;
  activity: boolean;
  role: string;
}