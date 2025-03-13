function solution(numbers) {
    var answer = 0;
    // let accNumber = 0;
    
    answer = numbers.reduce((acc,number)=>acc+number/numbers.length,0);
    
    // for(let i = 0; i < numbers.length; i++){
    //    accNumber += numbers[i]
    // }
    
    // return answer = accNumber / numbers.length;
     return answer;
}