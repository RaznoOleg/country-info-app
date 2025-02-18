import Link from 'next/link';
import { Country } from '@/types/country';

interface CountryListCardProps {
  country: Country;
}

export default function CountryListCard({ country }: CountryListCardProps) {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow mb-4 flex flex-row items-center space-x-4">
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{country.name}</h2>
      </div>
      <Link href={`/countryInfo/${country.countryCode}`}>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
          View Details
        </button>
      </Link>
    </div>
  );
}
