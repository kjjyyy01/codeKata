function solution(s1, s2) {
    let answer = 0;
    
    answer = s1.filter((element)=>s2.includes(element));
    
    return answer.length;
}