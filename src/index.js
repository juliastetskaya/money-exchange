// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  if (currency < 1) {
    return {};
  }
  if (currency > 10000) {
    return { error: "You are rich, my friend! We don't have so much coins for exchange" };
  }
  const dict = new Map([[50, 'H'], [25, 'Q'], [10, 'D'], [5, 'N'], [1, 'P']]);
  const arr = [50, 25, 10, 5, 1];
  return arr.reduce((acc, item) => {
    const count = Math.floor(acc[0] / item);
    return (count === 0 ? acc : [acc[0] - count * item, { ...acc[1], [dict.get(item)]: count }]);
  }, [currency, {}])[1];
  
}
