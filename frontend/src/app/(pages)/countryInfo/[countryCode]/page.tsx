'use client';
import { useCountryInfo } from '@/hooks/useCountryInfo';
import { useParams } from 'next/navigation';
import CountryInfoCard from '@/components/CountryInfoCard';
import Loader from '@/components/Loader';

const CountryInfoPage = () => {
  const params = useParams<{ countryCode: string }>();
  const { country, isLoading, isError } = useCountryInfo(params.countryCode);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <p className="text-center text-xl text-red-600">
        Error loading country details.
      </p>
    );

  return (
    <div className="container mx-auto p-8">
      {country && <CountryInfoCard country={country} />}
    </div>
  );
};

export default CountryInfoPage;
