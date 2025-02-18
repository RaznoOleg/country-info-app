import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('list')
  @ApiOperation({ summary: 'Get list of available countries' })
  async getAvailableCountries() {
    return await this.countriesService.getAvailableCountries();
  }

  @Get(':countryCode')
  @ApiOperation({ summary: 'Get detailed country info by country code' })
  @ApiParam({
    name: 'countryCode',
    description: 'The country code (e.g., UA for Ukraine)',
  })
  async getCountryInfo(@Param('countryCode') countryCode: string) {
    return await this.countriesService.getCountryInfo(countryCode);
  }
}
