import api from '../countryApi';

export const getCountryInfo = async (countryCode: string) => {
  const response = await api.get(`countries/${countryCode}`);
  return response.data;
};
