import api from '../countryApi';

export const getCountries = async () => {
  const response = await api.get('countries/list');
  return response.data;
};
