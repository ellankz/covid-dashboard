const COVID19API_BASE = 'https://api.covid19api.com';
const DISEASESH_BASE = 'https://disease.sh/v3/covid-19';

export class DataLoader {
  static async getNewTotalTodayAll() {
    try {
      const newTotalTodayAllJson = await fetch(`${COVID19API_BASE}/summary`);
      const newTotalTodayAll = await newTotalTodayAllJson.json();
      return newTotalTodayAll;
    } catch (err) {
      throw new Error('Failed to load newTotalTodayAll');
    }
  }

  static async getHistoricalGlobal() {
    try {
      const historicalGlobalJson = await fetch(`${DISEASESH_BASE}/historical/all?lastdays=all`);
      const historicalGlobal = await historicalGlobalJson.json();
      return historicalGlobal;
    } catch (err) {
      throw new Error('Failed to load historicalTotalAll');
    }
  }

  static async getHistoricalByCountry(countryCode) {
    try {
      const historicalTotalCountryJson = await fetch(`${DISEASESH_BASE}/historical/${countryCode}?lastdays=all`);
      const historicalTotalCountry = await historicalTotalCountryJson.json();
      return historicalTotalCountry;
    } catch (err) {
      throw new Error('Failed to load historicalTotalCountry');
    }
  }
}
