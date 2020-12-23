import { DataService } from '../../src/service/DataService';
import countriesData from '../../src/service/countries.json';

describe('data service functions', () => {
  const dataService = new DataService();

  test('should initiate emtpy data containers', () => {
    expect(dataService.data.Global).toBeTruthy();
    expect(dataService.data.Countries).toBeTruthy();
    expect(dataService.countriesData).toBeTruthy();
  });

  test('should generate data summary', () => {
    const dataObj = { Confirmed: { '12/21/20': 53425, '12/22/20': 53814 }, Deaths: { '12/21/20': 1098, '12/22/20': 1111 }, Recovered: { '12/21/20': 28752, '12/22/20': 29249 } };
    const population = 2886026;
    const output = '{"Date":"12/22/20","New":{"Confirmed":389,"Deaths":13,"Recovered":497},"Total":{"Confirmed":53814,"Deaths":1111,"Recovered":29249},"NewPer100k":{"Confirmed":13.478742048754931,"Deaths":0.45044639237484346,"Recovered":17.22091207771517},"TotalPer100k":{"Confirmed":1864.6401660969098,"Deaths":38.49584168680393,"Recovered":1013.4697331209074}}';
    const result = DataService.calculateSummaryData(dataObj, population);
    expect(JSON.stringify(result)).toEqual(output);
  });

  test('should calculate coeficient per 100k population', () => {
    dataService.countriesData = countriesData;
    const datasets = [
      { country: null, coef: 72465.96007 },
      { country: 'UKR', coef: 426.92393 },
      { country: 'CAN', coef: 361.55487 },
      { country: 'IND', coef: 12952.1 },
      { country: 'CHN', coef: 13774.22166 },
    ];
    datasets.forEach((item) => {
      expect(dataService.getCoefPer100k(item.country)).toEqual(item.coef);
    });
  });
});
