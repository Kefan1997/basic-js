const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  let regexp = /^[0-9]/;
  if (!regexp.test(sampleActivity)) {
    return false;
  }

  sampleActivity = parseFloat(sampleActivity);
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let time = Math.ceil(Math.log(15 / sampleActivity) / k);
  return time;
};
