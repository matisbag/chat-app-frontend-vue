export interface User {
  id: string
  email: string
  pseudo: string
  password: string
}

export interface UserForm {
  email: string
  password: string
}

interface Token {
  type: string
  token: string
}

export interface UserLoginResponse {
  user: User
  token: Token
}

export type UserWithoutPassword = Omit<User, "password">
