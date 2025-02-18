import Image from 'next/image';
import { CountryInfo } from '@/types/countryInfo';
import Link from 'next/link';
import PopulationChart from '../PopulationChart';

interface CountryInfoCardProps {
  country: CountryInfo;
}

export default function CountryInfoCard({ country }: CountryInfoCardProps) {
  return (
    <div className="border p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow bg-customGray max-w-6xl mx-auto">
      {country && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              {country.countryInfo.officialName}, {country.countryInfo.region}
            </h2>
          </div>

          <div className="flex justify-center mb-6">
            <Image
              src={country.flag}
              alt={`Flag of ${country.countryInfo.officialName}`}
              width={320}
              height={200}
              layout="intrinsic"
              className="object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Bordering Countries:
            </h3>
            {country.countryInfo.borders &&
            country.countryInfo.borders.length > 0 ? (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {country.countryInfo.borders.map((neighbor) => (
                  <div key={neighbor.countryCode}>
                    <Link href={`/countryInfo/${neighbor.countryCode}`}>
                      <div className="p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow text-blue-600 font-semibold text-center">
                        {neighbor.commonName}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center mt-4 text-gray-500">
                No bordering countries found
              </p>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700">
              Population Growth:
            </h3>
            <PopulationChart populationData={country.population} />
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/countries">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
                Back to Countries List
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
