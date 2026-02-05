import instance from "../instance";

export const getMe = async () => {
  const data = await instance.get('User/GetMe')
  .then(response => response.data);

  return data;
}
