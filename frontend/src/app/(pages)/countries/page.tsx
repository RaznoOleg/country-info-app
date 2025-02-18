'use client';
import { useCountries } from '@/hooks/useCountries';
import { Country } from '@/types/country';
import CountryListCard from '@/components/CountryListCard';
import Loader from '@/components/Loader';
import { useState } from 'react';

export default function CountriesPage() {
  const { countries, isLoading, isError } = useCountries();
  const [displayedCountries, setDisplayedCountries] = useState(15);

  const handleShowMore = () => {
    setDisplayedCountries((prev) => prev + 12);
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <p className="text-center text-xl text-red-600">
        Error loading countries.
      </p>
    );

  const countriesToDisplay = countries?.slice(0, displayedCountries);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Countries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countriesToDisplay?.map((country: Country) => (
          <CountryListCard key={country.countryCode} country={country} />
        ))}
      </div>

      {countries && countries.length > displayedCountries && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="text-lg px-6 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
