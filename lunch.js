/** lunchCount: return # of carrots eaten
 *
 * params:
 * - garden: matrix of carrot counts
 *
 * returns: # of carrots
 */

//START
//determine start pt

//EAT
//add carrots in cell to total
//and reset that cell to 0 carrots

//MOVE
//check all directions
//compare vals
//if tied for highest, choose in WNES order
//if no carrots in W,N,E or S
//sleep

//return total

function lunchCount(garden) {}

[
  [1, 1, 1],
  [0, 1, 1],
  [9, 1, 9],
];

[
  [9, 9, 9, 9],
  [9, 3, 1, 0],
  [9, 1, 4, 2],
  [9, 9, 1, 0],
];

[
  [2, 3, 1, 4, 2, 2, 3],
  [2, 3, 0, 4, 0, 3, 0],
  [1, 7, 0, 2, 1, 2, 3],
  [9, 3, 0, 4, 2, 0, 3],
];

//make startArr = []
//if row is odd, push middle
//if row is even, push both middle cells
//if col is odd, push middle
//if col is even, push both two middle cells
//compare startArr vals, and choose highest

function findStart(garden) {
  const startArr = [];
  let numOfRows = garden.length;
  let numOfCols = garden[0].length;
  let evenRows = false;
  let evenCols = false;

  //find row/s
  let rowIndexA; //which row to start on
  let rowIndexB; //plus this one, if even rows
  if (numOfRows % 2 === 0) {
    //if even number of rows
    evenRows = true;
    rowIndexA = numOfRows / 2 - 1;
    rowIndexB = numOfRows / 2;
  } else {
    //odd number of rows
    rowIndexA = Math.ceil(numOfRows / 2) - 1;
  }

  //find column/s
  let colIndexA; //which col to start on
  let colIndexB; //plus this one, if even columns
  if (numOfCols % 2 === 0) {
    //if even number of cols
    evenCols = true;
    colIndexA = numOfCols / 2 - 1;
    colIndexB = numOfCols / 2;
  } else {
    //odd number of cols
    colIndexA = Math.ceil(numOfCols / 2) - 1;
  }

  startArr.push(garden[rowIndexA][colIndexA]);
  if (evenRows && evenCols) {
    startArr.push(garden[rowIndexB][colIndexB]);
    startArr.push(garden[rowIndexB][colIndexA]);
    startArr.push(garden[rowIndexA][colIndexB]);
  }
  else if (evenRows) {
    startArr.push(garden[rowIndexB][colIndexA]);
  }
  else if (evenCols) {
    startArr.push(garden[rowIndexA][colIndexB]);
  }
  
  console.log(`StartArr: ${startArr}`);
}





  // if (rowIndexB === undefined) {
  //   rowIndexB = null;
  // }

  // if (colIndexB === undefined) {
  //   colIndexB = null;
  // }

  // console.log('Which row:')
  // console.log(`    RowA: ${rowIndexA}`);
  // console.log(`    RowB: ${rowIndexB}`);
  // console.log(`    ColA: ${colIndexA}`);
  // console.log(`    ColB: ${colIndexB}`);

  // console.log('Cells:')
  // console.log(`    ${garden[rowIndexA][colIndexA]}`)
  // console.log(`    ${garden[rowIndexA][colIndexB]}`)
  // console.log(`    ${garden[rowIndexB][colIndexA]}`)
  // console.log(`    ${garden[rowIndexB][colIndexB]}`)

  // if (garden[rowIndexA][colIndexB] === undefined) {
  //   garden[rowIndexA][colIndexB] = null;
  // }
  // if (garden[rowIndexB][colIndexA] === undefined) {
  //   garden[rowIndexB][colIndexA] = null;
  // }
  // if (garden[rowIndexB][colIndexB] === undefined) {
  //   garden[rowIndexB][colIndexB] = null;
  // }



  //compare those cells, and choose highest number



// startArr = [1,3,4,7]

{ 
  7: garden[0][1]
  4: garden[0][0]
  3: garden[1][0]
  8: garden[1][1]
}