/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const rentPerDay = 40;
  const rentPeriod = days;

  if (rentPeriod >= 7) {
    return rentPerDay * rentPeriod - 50;
  }

  if (rentPeriod >= 3) {
    return rentPerDay * rentPeriod - 20;
  }

  return rentPerDay * rentPeriod;
}

module.exports = calculateRentalCost;
