import instance from "../instance";

export const loginRequest = async (email: string, password: string) => {
  const data = await instance.post('Login/login', {
    Email: email,
    Password: password
  }).then(response => response.data);

  return data;
}

export const logoutRequest = async () => {
  return await instance
    .get('Login/logout')
    .then(response => response.data);
}

export const refreshSessionRequest = async () => {
  const data = await instance
    .get('Login/refresh')
    .then(response => response.data);

  return data;
};
