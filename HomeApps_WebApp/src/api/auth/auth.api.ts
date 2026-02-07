import type { AxiosResponse } from "axios";
import instance from "../instance";
import type { LoginResponse, LogoutResponse, RefreshSessionResponse } from "../repsonseTypes/auth.response";

export const loginRequest = async (email: string, password: string) : Promise<AxiosResponse<LoginResponse>> => {
  const data = instance
  .post('Login/Login', {
    Email: email,
    Password: password,
  });

  return data;
};

export const logoutRequest = async () : Promise<AxiosResponse<LogoutResponse>> => {
  const data = instance
    .get('Login/logout');

  return data;
};

export const refreshSessionRequest = async () : Promise<AxiosResponse<RefreshSessionResponse>> => {
  const data = instance
    .get('Login/refresh');

  return data;
};
