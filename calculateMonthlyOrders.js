// input - arr of objs
// out - num

// create variable totalMonthlyOrders
// loop over arr
//   loop over objs
//     add val to totalMonthlyOrders
// return totalMonthlyOrders

function calculateMonthlyOrders(arr) {
  let totalMonthlyOrder = 0;

  for (let obj of arr) {
    for (let month in obj) {
      totalMonthlyOrder += obj[month];
    }
  }

  return totalMonthlyOrder;
}

//7.5 mins
//mistakes - used "of" instead of "in" on line 14

//Rithm solution
function calculateMonthlyOrders(orders) {
  let total = 0;
  for (let order of orders) {
    for (let key in order) {
      total += order[key];
    }
  }
  return total;
}
