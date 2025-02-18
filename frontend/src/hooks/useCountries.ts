'use client';
import useSWR from 'swr';
import { getCountries } from '../api/services/countries';
import { Country } from '@/types/country';

export const useCountries = () => {
  const { data, error } = useSWR<Country[]>('countries/list', getCountries);

  return {
    countries: data,
    isLoading: !data && !error,
    isError: error,
  };
};
