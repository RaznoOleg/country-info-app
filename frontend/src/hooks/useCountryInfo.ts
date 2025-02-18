'use client';
import useSWR from 'swr';
import { getCountryInfo } from '../api/services/countryInfo';
import { CountryInfo } from '@/types/countryInfo';

export const useCountryInfo = (countryCode: string) => {
  const { data, error } = useSWR<CountryInfo>(`countries/${countryCode}`, () =>
    getCountryInfo(countryCode),
  );

  return {
    country: data,
    isLoading: !data && !error,
    isError: error,
  };
};
