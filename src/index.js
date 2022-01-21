
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else if(matrix.length == 0) {
    return matrix;
  } else {
    matrix.forEach((el, i) => {
      if (i%2 != 0) {
        el.reverse()
      }
    });
    return matrix.join(',').split(',');
  }
}
