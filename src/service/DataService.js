import keyBy from 'lodash.keyby';
import { DataLoader } from './DataLoader';
import countriesData from './countries.json';

export class DataService {
  constructor() {
    this.data = {
      Historical: {},
      Global: {},
      Countries: {},
    };
    this.countriesData = {};
  }

  async init() {
    try {
      await this.getStartData();
    } catch (err) {
      throw new Error('Error during init', err);
    }
    return this.data;
  }

  async getStartData() {
    this.countriesData = countriesData;
    try {
      await Promise.all([this.getSummaryData(), this.getHistoricalGlobalData()]);
    } catch (err) {
      throw new Error('Error in getStartData'.err);
    }
  }

  async getSummaryData() {
    const res = await DataLoader.getNewTotalTodayAll();
    this.data.Global = res.Global;
    this.data.Countries = keyBy(res.Countries, 'CountryCode');
  }

  async getHistoricalGlobalData() {
    const res = await DataLoader.getHistoricalGlobal();
    this.data.Historical.Global = res;
  }

  async getHistoricalCountryData(countryCode) {
    const res = await DataLoader.getHistoricalByCountry(countryCode);
    this.data.Historical.Countries[countryCode] = res;
  }
}
