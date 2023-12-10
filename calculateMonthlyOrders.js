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
//mistakes - used "of" instead of "in", line 14
