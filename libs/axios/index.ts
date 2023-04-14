import { PagePath } from '@/layouts/shared';

import axios, { AxiosResponse } from 'axios';

type AxiosErrorResponse = {
  code: string;
  message: string;
  data?: any;
};

const instance = axios.create({
  baseURL: process.env.API_URL,
});

instance.interceptors.response.use(
  ({ data }) => {
    const dataValue = data || {};
    if (dataValue.data) {
      return { ...dataValue };
    }

    return { data: dataValue };
  },
  async ({ response }) => {
    const { data } = response || {};
    const { status } = response || {};
    const { code } = data || {};

    return Promise.reject(data);
  }
);

export type { AxiosResponse, AxiosErrorResponse };

export default instance;
