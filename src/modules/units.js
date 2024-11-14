// eslint-disable-next-line import/prefer-default-export
export const convertTemperature = (value, unit) => {
  if (unit === 'celsius') {
    return ((value - 32) * (5 / 9)).toFixed(1);
  }
  if (unit === 'fahrenheit') {
    return (value * (9 / 5) + 32).toFixed(1);
  }
  return value;
};
