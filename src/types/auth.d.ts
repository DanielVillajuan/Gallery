export type AuthStore = {
  username: string,
  isAuth: boolean,
  login: (username: string) => void,
  logout: () => void
}

export type UserCredentialType = {
  username: string,
  password: string
}
