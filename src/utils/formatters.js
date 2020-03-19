import { convertCalorieToKilojoule } from "./index"


export const numberFormat = (number, locale = 'en-En') => new Intl.NumberFormat(locale).format(number);

export function formatDuration(duration) {
  const min = duration % 60;
  if (duration < 60) {
    return `${duration} min`;
  }
  const hr = Math.floor(duration / 60);
  return min === 0 ? `${hr} hr` : `${hr} hr ${min} min`;
}

export function formatEnergy(energy, energyUnits) {
  if ('kilojoules' === energyUnits) {
    return `${numberFormat(convertCalorieToKilojoule(energy))} Kilojoules`;
  }
  return `${numberFormat(energy)} Calories`;
}

export const formatNutrient = (nutrient) => `${numberFormat(nutrient)}g`;
