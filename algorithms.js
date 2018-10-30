
function factorial(n) {
    
    if(n === 1){
        return 1;
    } else {
        return n * factorial(n -1);
    }

}

function bubbleSort(arr){

    for(let k of arr){

        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i +1];
                arr[i +1] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;

}


function plus( a , b){
    return a  + b  ;
}

module.exports = {factorial, plus,bubbleSort};


