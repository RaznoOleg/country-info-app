import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import {
  CountryInfoResponse,
  PopulationDataResponse,
  FlagDataResponse,
} from './interfaces/country.interface';

@Injectable()
export class CountriesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getAvailableCountries() {
    const apiUrl = this.configService.get<string>('apiBaseUrl');
    const response = await lastValueFrom(
      this.httpService.get<string[]>(`${apiUrl}/AvailableCountries`),
    );
    return response.data;
  }

  async getCountryInfo(countryCode: string) {
    const populationApiUrl = this.configService.get<string>('populationApiUrl');
    const flagApiUrl = this.configService.get<string>('flagApiUrl');
    const countryInfoApiUrl = this.configService.get<string>('apiBaseUrl');

    const countryInfo = await lastValueFrom(
      this.httpService.get<CountryInfoResponse>(
        `${countryInfoApiUrl}/CountryInfo/${countryCode}`,
      ),
    );

    const countryName = countryInfo.data.commonName;

    const populationData = await lastValueFrom(
      this.httpService.post<PopulationDataResponse>(`${populationApiUrl}`, {
        country: countryName,
      }),
    );

    const flagImage = await lastValueFrom(
      this.httpService.post<FlagDataResponse>(`${flagApiUrl}`, {
        iso2: countryCode,
      }),
    );

    return {
      countryInfo: countryInfo.data,
      population: populationData.data.data.populationCounts,
      flag: flagImage.data.data.flag,
    };
  }
}
