function solution(numer1, denom1, numer2, denom2) { 
  const denom = denom2 * numer1 + denom1 * numer2; //분자10
  const numer = denom1 * denom2; //분모8
  
    let minNumber;
    if (denom < numer){ //분자보다 분모가 더 클 경우 10<8
        minNumber = denom; //분자10
    } else {
        minNumber = numer;//분모8
    } 
    while(true) {
        if (denom % minNumber === 0) { //10 % 8,7,,,2 === 0
            if(numer % minNumber === 0) {//8 % 8,,,2 === 0
                return [denom / minNumber , numer / minNumber];
            }
        }
        minNumber -= 1;
    }
}