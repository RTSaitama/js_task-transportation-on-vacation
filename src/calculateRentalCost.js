/**
 * @param {number} days
 *
 * @return {number}
 */

const SHORTTERM = 3;
const LONGTERM = 7;
const rentperday = 40;

function calculateRentalCost(days) {
  const rentPeriod = days;

  let discount = 50;

  if (rentPeriod < LONGTERM) {
    discount = 20;
  }

  if (rentPeriod < SHORTTERM) {
    discount = 0;
  }

  return rentperday * rentPeriod - discount;
}

module.exports = calculateRentalCost;
