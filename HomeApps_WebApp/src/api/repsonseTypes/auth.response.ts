export interface LoginResponse {
  userId: string;
  displayName: string;
  emailAddress: string;

  token: string;
}

export type LogoutResponse = void;

export interface RefreshSessionResponse {
  token: string;
}
