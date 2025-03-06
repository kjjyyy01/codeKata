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
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]))