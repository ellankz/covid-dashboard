import { DrawMap } from '../../src/components/Map/DrawMap';

describe('DrawMap class', () => {
  const state = {
    country: null,
    type: 'Confirmed',
    calcType: 'Total',
    period: 'All time',
    chartTypes: ['Confirmed'],
  };
  const data = null;
  const cb = () => {};
  const drawMap = new DrawMap(state, data, cb);

  test('should create map instance', () => {
    expect(drawMap.scale).toHaveLength(8);
    expect(drawMap.markers).toHaveLength(0);
    expect(drawMap.map).toBeUndefined();
    expect(drawMap.state).toEqual(state);
    expect(drawMap.data).toBeNull();
    expect(drawMap.isLegendVisible).toEqual(false);
    expect(drawMap.onCountryClick).toBeInstanceOf(Function);
  });

  test('should get correct color by scale', () => {
    const mapColors = ['grey', '#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];
    const numbers = [
      undefined,
      0 + 0.1, 1e4 + 0.1, 5e4 + 0.1, 1e5 + 0.1, 5e5 + 0.1, 1e6 + 0.1, 5e6 + 0.1, 1e7 + 0.1,
    ];
    numbers.forEach((num, i) => {
      expect(DrawMap.getColor(num, drawMap.scale)).toEqual(mapColors[i]);
    });
  });

  test('should find path by current state', () => {
    expect(drawMap.findPathByState()).toEqual('Total');
    drawMap.state = { period: 'New', calcType: 'Total' };
    expect(drawMap.findPathByState()).toEqual('New');
    drawMap.state = { period: 'All time', calcType: 'Per 100k' };
    expect(drawMap.findPathByState()).toEqual('TotalPer100k');
    drawMap.state = { period: 'New', calcType: 'Per 100k' };
    expect(drawMap.findPathByState()).toEqual('NewPer100k');
    drawMap.state = state;
  });

  test('should calculate cases number', () => {
    const numbers = [2.44, 395, 66.665454549, 0.3435498543, 0.99];
    const output = [2, 395, 67, 0.344, 0.99];

    numbers.forEach((num, i) => {
      expect(DrawMap.getCasesNumber(num)).toEqual(output[i]);
    });
  });

  test('should create scale by state', () => {
    const variants = [
      {
        period: 'All time',
        calcType: 'Total',
        scale: '[0,10000,50000,100000,500000,1000000,5000000,10000000]',
      },
      {
        period: 'New',
        calcType: 'Total',
        scale: '[0,50,250,500,2500,5000,25000,50000]',
      },
      {
        period: 'All time',
        calcType: 'Per 100k',
        scale: '[0,10,50,100,500,1000,5000,10000]',
      },
      {
        period: 'New',
        calcType: 'Per 100k',
        scale: '[0,0.05,0.25,0.5,2.5,5,25,50]',
      },
    ];

    variants.forEach((variant) => {
      drawMap.state = { period: variant.period, calcType: variant.calcType };
      drawMap.getScaleByState();
      expect(JSON.stringify(drawMap.scale)).toEqual(variant.scale);
    });
    drawMap.state = state;
  });
});
