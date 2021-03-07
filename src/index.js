
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || !matrix.length){
    return [];
  }
  let result = [];
  let directionFlag = false;
  for(let i = 0; i < matrix.length; ++i){
    directionFlag = !directionFlag;
    for(let j = 0; j < matrix[i].length; ++j){
      if(directionFlag){
        result.push(matrix[i][j]);
      }
      else{
        result.push(matrix[i][matrix[i].length - j - 1]);
      }
    }
  }
  return result;
}
