function solution(numbers, n) {
    let answer = 0;
    
    for(let i = 0; i < numbers.length; i++){
        answer += numbers[i];
        
        if(answer > n) {
            return answer;
        }
    }
    
    return answer;
}
// function solution(numbers, n) {
//     let answer = 0;
//     let i = 0;

//     while (i < numbers.length) {
//         answer += numbers[i];
//         if (answer > n) {
//             break;
//         }
//         i++;
//     }

//     return answer;
// }
