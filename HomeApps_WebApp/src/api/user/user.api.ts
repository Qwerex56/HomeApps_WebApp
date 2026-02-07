import type { AxiosResponse } from "axios";
import instance from "../instance";
import type { MeResponse } from "../repsonseTypes/user.response";

export const getMe = async () : Promise<AxiosResponse<MeResponse>> => {
  const data = instance
  .get('User/GetMe');

  return data;
};
