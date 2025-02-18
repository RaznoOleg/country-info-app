export type CountryDetails = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null | CountryDetails[];
};

export type PopulationData = {
  year: number;
  value: number;
};

export type CountryInfo = {
  countryInfo: CountryDetails;
  population: PopulationData[];
  flag: string;
};
