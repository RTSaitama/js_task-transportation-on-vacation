/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const rentPerDay = 40;
  const rentPeriod = days;
  const shortTerm = 3;
  const LongTerm = 7;
  let discount = 50;

  if (rentPeriod < LongTerm) {
    discount = 20;
  }

  if (rentPeriod < shortTerm) {
    discount = 0;
  }

  return rentPerDay * rentPeriod - discount;
}

module.exports = calculateRentalCost;
