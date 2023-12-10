//  in - array of obj
//  out - new arr [name of TextTrackList, priority rating]

// create two variable to keep track of priorities
// loop over arr
//   if val is greater than curMax
//     reassign curMax to that val
//     reassign highTask to obj.task
// return [highTask, curMax]

function findHighestPriorityTodo(arr) {
  let curMax = 0;
  let highTask = "";

  for (let obj of arr) {
    if (obj.priority > curMax) {
      curMax = obj.priority;
      highTask = obj.task;
    }
  }

  return [highTask, curMax];
}

// let todos = [
//   {
//     task: "Eat",
//     priority: 18,
//   },
//   {
//     task: "Sleep",
//     priority: 22,
//   },
//   {
//     task: "Solve problems",
//     priority: 17,
//   },
// ];

// findHighestPriorityTodo(todos); // ["Sleep", 22]

// let todos = [
//   {
//     task: "Task 1",
//     priority: 1,
//   },
//   {
//     task: "Task 2",
//     priority: 2,
//   },
//   {
//     task: "Task 3",
//     priority: 3,
//   },
// ];

// findHighestPriorityTodo(todos); // ["Task 3", 3]

// 10.5 mins
// Perfect!

function findHighestPriorityTodo(todos) {
  let highestPriority = 0;
  let highestPriorityTask = "";
  for (let todo of todos) {
    if (todo.priority > highestPriority) {
      highestPriority = todo.priority;
      highestPriorityTask = todo.task;
    }
  }
  return [highestPriorityTask, highestPriority];
}
