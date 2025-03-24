function solution(n) {
    var answer = [];
    
    for(let i = 0; i <= n; i++){
        answer.push(i)
    }
    
    return answer.filter((num) => num % 2 === 1).sort((a,b) => a - b);
}