import { axiosInstance } from "../instance";

const baseUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "/";

console.log(baseUrl, 'this is the base url---')

export const getStocks = async () => {
  const response = await axiosInstance.patch(
    `${baseUrl}/stocks`
  );
  console.log('this is the response', response, response?.data)
  return response.data;
};