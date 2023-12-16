/**
 * create total var
 * loop over obj1
 *  if val is true for both obj, add one to total
 * return total
 */

function scheduleCheck(obj1, obj2) {
  let total = 0;

  for (let day in obj1) {
    if (obj1[day] === true && obj2[day] === true) {
      total++;
    }
  }

  return total;
}

function scheduleCheck(obj1, obj2) {
  let totalDaysBothAreTrue = 0;
  for (let day in obj1) {
    if (obj1[day] === true && obj2[day] === true) {
      totalDaysBothAreTrue++;
    }
  }
  return totalDaysBothAreTrue;
}

function scheduleCheck(schedule1, schedule2) {
  let count = 0;
  for (let key in schedule1) {
    if (schedule1[key] === true && schedule2[key] === true) {
      count++;
    }
  }
  return count;
}
