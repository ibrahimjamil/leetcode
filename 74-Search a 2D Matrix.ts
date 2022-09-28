function searchMatrix(matrix: number[][], target: number): boolean {
  for(let r=0; r < matrix.length; r++){
    for (let c=0; c < matrix[r].length; c++){
      if ((target >= matrix[r][c] && target <= matrix[r][matrix[r].length - 1])){
        let low = c;
        let high = matrix[r].length - 1;
        while(low <= high) {
          const mid = Math.floor((low + high)/2);
          if (target === matrix[r][mid]) {
            return true;
          }else if (target < matrix[r][mid]){
            high = mid - 1;
          }else if (target > matrix[r][mid]){
            low = mid + 1
          }
        }
      }else{
        break;
      }
    }
  }
  return false;
};
