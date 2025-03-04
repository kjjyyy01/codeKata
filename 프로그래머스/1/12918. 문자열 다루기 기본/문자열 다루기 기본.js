function solution(s) {
    var answer = true;
    
    answer = (s.length===4 || s.length===6) && /^[0-9]+$/.test(s)
    
    
    return answer;
}
console.log(solution("a234"))
console.log(solution("1234"))