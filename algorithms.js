
function factorial(n) {

    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }

}

function bubbleSort(arr) {

    for (let k of arr) {

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;

}


function plus(a, b) {
    return a + b;
}

function max(number) {
    let maxNum = number[0]
    for (let cur of number) {
        if (cur > maxNum) {
            maxNum = cur;
        }
    }
    return maxNum;
}
function dividers(num) {
    numArray = []
    for (let i = 0; i <= num / 2; i++) {
        if (num % i == 0) {
            numArray.push(i);
        }
    }
    return numArray;

}

function checkPalindrome(inputString){

    let arr  = inputString.split("");
 
 
    let rev = arr.reverse();
    let revString = rev.join("");
     return revString === inputString;
     
 }
 
 
 function adjacentElementsProduct(inputArray) {
 
     let max = inputArray[0] * inputArray[1];
     for(let i = 0; i < inputArray.length - 1 ; i++ ){
         // let a :number = 0 ;
 
          let curMul = inputArray[i] * inputArray[i + 1];
 
          if(curMul > max){
              max = curMul;
          }
 
     }
 
     return max;
 } 



module.exports = { factorial, plus, bubbleSort, max, dividers, checkPalindrome ,adjacentElementsProduct };


