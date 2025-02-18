export interface CountryInfoResponse {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null | [];
  }[];
}

export interface PopulationDataResponse {
  data: {
    populationCounts: { year: number; value: number }[];
  };
}

export interface FlagDataResponse {
  data: {
    flag: string;
  };
}
