/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const rentPerDay = 40;
  const rentPeriod = days;
  let discount = 50;

  if (rentPeriod < 7) {
    discount = 20;
  }

  if (rentPeriod < 3) {
    discount = 0;
  }

  return rentPerDay * rentPeriod - discount;
}

module.exports = calculateRentalCost;
