// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const axiosInstance = axios.create({
    timeout: 8000, 
    headers: {
      'Content-Type': 'application/json',
    }
  });