module.exports = function countCats(matrix) {
  let nestedArray = [];
  let count = 0;
  for(let i = 0; i < matrix.length; i++){
    if(matrix[i].includes("^^")){
      count++;
    }
  }
  throw 'Not implemented';
  return count;// remove line with error and write your code here
};
