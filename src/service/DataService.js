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
    // DataService.convertCodes();
    await this.getStartData();
    return this.data;
  }

  async getStartData() {
    this.countriesData = countriesData;
    await Promise.all([
      this.getHistoricalCountriesData(DAYS_NUMBER_TO_LOAD_AT_START),
      this.getHistoricalGlobalData(),
    ]);
    this.createSummary();
  }

  async getCountryData(countryCode) {
    await this.getHistoricalCountryData(countryCode);
    this.createSummary(countryCode);
    console.log(`data for ${countryCode} loaded`);
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

  async getHistoricalCountryData(countryCode) {
    const res = await DataLoader.getHistoricalByCountry(countryCode, DAYS_NUMBER_FROM_START);
    const country = { ...res, code: countryCode };
    this.data.Countries[countryCode] = country;
  }

  // static convertCodes() {
  //   const oldCountries = { ...countriesData };
  //   const newCountries = {};
  //   all.forEach((allCountry) => {
  //     const obj = countriesData[allCountry['alpha-2']];
  //     if (obj) {
  //       // console.log(obj);
  //       delete oldCountries[allCountry['alpha-2']];
  //       const code = allCountry['alpha-3'];
  //       obj.code = code;
  //       newCountries[code] = obj;
  //     }
  //   });
  //   console.log(geoCountries.features[0].id);

  //   const oCountries = { ...countriesData };
  //   const rest = {};
  //   geoCountries.features.forEach((c) => {
  //     if (oCountries[c.id]) {
  //       delete oCountries[c.id];
  //     } else {
  //       rest[c.id] = c;
  //     }
  //   });
  //   console.log(oCountries);
  //   console.log(rest);
  // }
}
