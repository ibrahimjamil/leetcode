function minEatingSpeed(piles: number[], h: number): number {
  let max = -1;
  for (let c = 0; c<piles.length; c++) {
    max = Math.max(max, piles[c]);
  }
  
  let low = 0
  let high = max;
  let res = 9999999999;
  while(low <= high) {
    const mid = Math.floor((low+high)/2);
    let sum = 0;
    for (let c=0; c<piles.length; c++) {
      sum += Math.ceil((piles[c]/mid))
    }
    if (sum > h){
      low = mid + 1
    }else{
      res = Math.min(res, mid);
      high = mid - 1;
    }
  }
  
  return res;
};
