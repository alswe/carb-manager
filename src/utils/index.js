export const getValidScore = score => {
  let validScore = score;
  if ('number' !== typeof score) {
    validScore = 0;
  } else if (score < 0) {
    validScore = 0;
  } else if (score > 5) {
    validScore = 5;
  }
  return validScore;
}

export const isValidStarType = type => ["full", "half", "empty"].includes(type);
