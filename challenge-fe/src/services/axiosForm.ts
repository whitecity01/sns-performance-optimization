import axios from 'axios';

const config = {
  baseURL: 'http://localhost:4000/api',
  timeout: 10000,
};

const axiosInstance = axios.create(config);

export const axiosInterface = async (
  method: string,
  url: string,
  data = {},
  params = {},
) => {
  try {
    const res = await axiosInstance({ method, url, data, params });
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
