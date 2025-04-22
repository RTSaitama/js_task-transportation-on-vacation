const SHORT_TERM = 3;
const LONG_TERM = 7;
const RENT_PER_DAY = 40;
const BIG_DISCOUNT = 50;
const MID_DISCOUNT = 20;

function calculateRentalCost(days) {
  const rentPeriod = days;

  if (rentPeriod >= LONG_TERM) {
    return RENT_PER_DAY * rentPeriod - BIG_DISCOUNT;
  }

  if (SHORT_TERM <= rentPeriod && rentPeriod < LONG_TERM) {
    return RENT_PER_DAY * rentPeriod - MID_DISCOUNT;
  }

  if (rentPeriod < SHORT_TERM) {
    return RENT_PER_DAY * rentPeriod;
  }
}

module.exports = calculateRentalCost;
