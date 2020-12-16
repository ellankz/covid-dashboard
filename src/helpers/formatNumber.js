export function formatNumber(num, digits) {
  const char = [
    { value: 1, symbol: '' },
    { value: 1E3, symbol: 'k' },
    { value: 1E6, symbol: 'M' },
    { value: 1E9, symbol: 'G' },
    { value: 1E12, symbol: 'T' },
    { value: 1E15, symbol: 'P' },
    { value: 1E18, symbol: 'E' },
  ];
  let i;
  for (i = char.length - 1; i > 0; i -= 1) {
    if (num >= char[i].value) {
      break;
    }
  }
  return (num / char[i].value).toFixed(digits) + char[i].symbol;
}
