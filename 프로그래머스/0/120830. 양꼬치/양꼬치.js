function solution(n, k) {
    var answer = 0;
    
    return answer = (n * 12000) + (( k - Math.floor(n/10) ) * 2000) ;
}
console.log(solution(10,3))
console.log(solution(64,6))