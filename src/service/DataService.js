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
    const arrayCases = Object.values(dataObject.Confirmed).sort((a, b) => b - a);
    const arrayDeaths = Object.values(dataObject.Deaths).sort((a, b) => b - a);
    const arrayRecvr = Object.values(dataObject.Recovered).sort((a, b) => b - a);
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
    this.data.Global.Confirmed = DataService.fixDataBugs(res.cases);
    this.data.Global.Deaths = DataService.fixDataBugs(res.deaths);
    this.data.Global.Recovered = DataService.fixDataBugs(res.recovered);
  }

  static fixDataBugs(dataObj) {
    const res = Object.entries(dataObj).sort((a, b) => a[1] - b[1]).reduce((acc, day) => {
      // eslint-disable-next-line prefer-destructuring
      acc[day[0]] = day[1];
      return acc;
    }, {});
    return res;
  }

  async getHistoricalCountriesData(numberOfDays) {
    const res = await DataLoader.getHistoricalAllCountries(numberOfDays);
    const filtered = res.filter((item) => item && item.country);
    const countryInfoArr = Object.values(this.countriesData);
    const withCodes = filtered.map((item) => {
      const countryInfo = countryInfoArr.find((info) => info.name === item.country);
      const { code } = countryInfo;
      const itemWithCode = { ...item, code };
      itemWithCode.timeline.Confirmed = DataService.fixDataBugs(itemWithCode.timeline.cases);
      delete itemWithCode.timeline.cases;
      itemWithCode.timeline.Deaths = DataService.fixDataBugs(itemWithCode.timeline.deaths);
      delete itemWithCode.timeline.deaths;
      itemWithCode.timeline.Recovered = DataService.fixDataBugs(itemWithCode.timeline.recovered);
      delete itemWithCode.timeline.recovered;
      return itemWithCode;
    });
    this.data.Countries = keyBy(withCodes, 'code');
  }

  getCoefPer100k(countryCode) {
    const population = !countryCode
      ? WORLD_POPULATION_WITH_STATS
      : Number(this.countriesData[countryCode].population);
    return population / 100000;
  }

  getSavedDataByCountry(type, countryCode) {
    let arr;
    if (!countryCode) {
      arr = Object.entries(this.data.Global[type]);
    } else {
      arr = Object.entries(this.data.Countries[countryCode].timeline[type]);
    }
    return arr;
  }

  getHistoricalDataPer100k(type, countryCode) {
    const coefPer100k = this.getCoefPer100k(countryCode);
    const arr = this.getSavedDataByCountry(type, countryCode);
    const res = arr.reduce((acc, dateData) => {
      const num = dateData[1] / coefPer100k;
      acc[dateData[0]] = Math.round(num * 1000) / 1000;
      return acc;
    }, {});
    return res;
  }

  getHistoricalDataForEachDay(type, countryCode) {
    const arr = this.getSavedDataByCountry(type, countryCode);
    const res = arr.reduce((acc, dateData, index) => {
      if (index === 0) {
        // eslint-disable-next-line prefer-destructuring
        acc[dateData[0]] = dateData[1];
      } else {
        const dayCases = dateData[1] - arr[index - 1][1];
        acc[dateData[0]] = dayCases;
      }
      return acc;
    }, {});
    return res;
  }

  getHistoricalDataForEachDayPer100k(type, countryCode) {
    const coefPer100k = this.getCoefPer100k(countryCode);
    const eachDayObj = this.getHistoricalDataForEachDay(type, countryCode);
    const res = Object.entries(eachDayObj).reduce((acc, dateData) => {
      const num = dateData[1] / coefPer100k;
      acc[dateData[0]] = Math.round(num * 1000) / 1000;
      return acc;
    }, {});
    return res;
  }

  hasCountryData(countryCode) {
    return !!this.data.Countries[countryCode];
  }
}
