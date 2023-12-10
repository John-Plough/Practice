// in - two obj (key og day, val of boolean)
// out - num (when days val is true for both obj)

// count var
// loop over obj1
//   if val is true for both
//   increment total by 1
// return total

function scheduleCheck(obj1, obj2) {
  let totalDaysBothAreTrue = 0;
  for (let day in obj1) {
    if (obj1[day] === true && obj2[day] === true) {
      totalDaysBothAreTrue++;
    }
  }
  return totalDaysBothAreTrue;
}

// 7 mins
// Perfect!

function scheduleCheck(schedule1, schedule2) {
  let count = 0;
  for (let key in schedule1) {
    if (schedule1[key] === true && schedule2[key] === true) {
      count++;
    }
  }
  return count;
}

// let schedule1 = {
//   Monday: true,
//   Tuesday: true,
//   Wednesday: true,
//   Thursday: true,
//   Friday: true,
//   Saturday: true,
//   Sunday: true,
// };
// let schedule2 = {
//   Monday: true,
//   Tuesday: true,
//   Wednesday: true,
//   Thursday: true,
//   Friday: true,
//   Saturday: true,
//   Sunday: true,
// };

// scheduleCheck(schedule1, schedule2); // 7;

// let schedule1 = {
//   Monday: true,
//   Tuesday: true,
//   Wednesday: true,
//   Thursday: true,
//   Friday: true,
//   Saturday: true,
//   Sunday: true,
// };
// let schedule2 = {
//   Monday: true,
//   Tuesday: true,
//   Wednesday: true,
//   Thursday: true,
//   Friday: true,
//   Saturday: false,
//   Sunday: true,
// };

// scheduleCheck(schedule1, schedule2); // 6;
