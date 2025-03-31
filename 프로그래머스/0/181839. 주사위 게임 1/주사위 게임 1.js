function solution(a, b) {
    let answer = 0;
   
    if(a % 2 === 1 && b % 2 === 1){
        answer = a**2 + b**2;
    }else if(a % 2 === 1 || b % 2 === 1){
        answer = 2*(a + b);
    }else if(!(a % 2 === 1 && b % 2 === 1)){
        answer = Math.abs(a - b);
    }
    
//     switch(answer){
//         case (a % 2 === 1 && b % 2 === 1):
//             answer = a**2 + b**2;
//             break;
            
//         case (a % 2 === 1 || b % 2 === 1):
//             answer = 2*(a + b);
//             break;
            
//         case !(a % 2 === 1 && b % 2 === 1):
//             answer = Math.abs(a - b);
//             break;
            
//         default:
//             return a*b;  
//     }
    return answer;
}