import keyBy from 'lodash.keyby';
import { DataLoader } from './DataLoader';
import countriesData from './countries.json';

const DAYS_NUMBER_TO_LOAD_AT_START = 2;
const DAYS_NUMBER_FROM_START = 'all';
const WORLD_POPULATION_WITH_STATS = 7246596007;

export class DataService {
  constructor() {
    this.data = {
      Global: {},
      Countries: {},
    };
    this.countriesData = {};
  }

  async init() {
    await this.getStartData();
    return this.data;
  }

  async getStartData() {
    this.countriesData = countriesData;
    await Promise.all([
      this.getHistoricalCountriesData(DAYS_NUMBER_TO_LOAD_AT_START),
      this.getHistoricalGlobalData(),
    ]);
    // this is loaded in background and thus does not require await
    this.getHistoricalCountriesData(DAYS_NUMBER_FROM_START).then(() => this.createSummary());
    this.createSummary();
  }

  createSummary() {
    const globalSummary = DataService.calculateSummaryData(
      this.data.Global,
      WORLD_POPULATION_WITH_STATS,
    );
    this.data.Global.Summary = globalSummary;

    Object.keys(this.data.Countries).forEach((countryCode) => {
      const countrySummary = DataService.calculateSummaryData(
        this.data.Countries[countryCode].timeline,
        Number(this.countriesData[countryCode].population),
      );
      this.data.Countries[countryCode].timeline.Summary = countrySummary;
    });
  }

  static calculateSummaryData(dataObject, population) {
    const coefPer100k = population / 100000;
    const summary = {};
    const arrayCases = Object.values(dataObject.cases).sort((a, b) => b - a);
    const arrayDeaths = Object.values(dataObject.deaths).sort((a, b) => b - a);
    const arrayRecvr = Object.values(dataObject.recovered).sort((a, b) => b - a);
    summary.New = {
      Confirmed: arrayCases[0] - arrayCases[1],
      Deaths: arrayDeaths[0] - arrayDeaths[1],
      Recovered: arrayRecvr[0] - arrayRecvr[1],
    };
    summary.Total = {
      Confirmed: arrayCases[0],
      Deaths: arrayDeaths[0],
      Recovered: arrayRecvr[0],
    };
    summary.NewPer100k = {
      Confirmed: summary.New.Confirmed / coefPer100k,
      Deaths: summary.New.Deaths / coefPer100k,
      Recovered: summary.New.Recovered / coefPer100k,
    };
    summary.TotalPer100k = {
      Confirmed: summary.Total.Confirmed / coefPer100k,
      Deaths: summary.Total.Deaths / coefPer100k,
      Recovered: summary.Total.Recovered / coefPer100k,
    };
    return summary;
  }

  async getHistoricalGlobalData() {
    const res = await DataLoader.getHistoricalGlobal();
    this.data.Global = res;
  }

  async getHistoricalCountriesData(numberOfDays) {
    const res = await DataLoader.getHistoricalAllCountries(numberOfDays);
    const filtered = res.filter((item) => item && item.country);
    const withCodes = filtered.map((item) => {
      const countryInfoArr = Object.values(this.countriesData);
      const countryInfo = countryInfoArr.find((info) => info.name === item.country);
      const { code } = countryInfo;
      const itemWithCode = { ...item, code };
      return itemWithCode;
    });
    this.data.Countries = keyBy(withCodes, 'code');
  }

  getHistoricalDataPer100k(type, countryCode) {
    const population = !countryCode
      ? WORLD_POPULATION_WITH_STATS
      : Number(this.countriesData[countryCode].population);
    const coefPer100k = population / 100000;
    let arr;
    if (!countryCode) {
      arr = Object.entries(this.data.Global[type]);
    } else {
      arr = Object.entries(this.data.Countries[countryCode].timeline[type]);
    }
    const res = arr.reduce((acc, dateData) => {
      acc[dateData[0]] = dateData[1] / coefPer100k;
      return acc;
    }, {});
    return res;
  }
}
