module.exports = function solveSudoku(matrix) {
  
  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (matrix[a][b] === 0) {
        for (let temporaryNumber = 1; temporaryNumber <= 9; temporaryNumber++) {
          if (temporaryFunc(matrix, a, b, temporaryNumber)) {
            matrix[a][b] = temporaryNumber;
            if (solveSudoku(matrix)) {
              return matrix;
            }
            matrix[a][b] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function temporaryFunc(matrix, temporaryRow, temporaryCol, temporaryNumber) {
  let mainRow = Math.floor(temporaryRow / 3) * 3;
  let mainCol = Math.floor(temporaryCol / 3) * 3;

  
  for (let col = 0; col < 9; col++) {
    if (col != temporaryCol && matrix[temporaryRow][col] === temporaryNumber) {
      return false;
    }
  }


  for (let row = 0; row < 9; row++) {
    if (row != temporaryRow && matrix[row][temporaryCol] === temporaryNumber) {
      return false;
    }
  }


  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (row != temporaryRow && col != temporaryCol && matrix[mainRow + row][mainCol + col] === temporaryNumber) {
        return false;
      }
    }
  }

  return true;
}
