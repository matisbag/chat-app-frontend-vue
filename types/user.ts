export interface User {
  id: string
  email: string
  password: string
}

export interface UserForm {
  email: string
  password: string
}

export interface UserLoginResponse {
  message: string
  user: User
  token: string
}

export type UserWithoutPassword = Omit<User, "password">
