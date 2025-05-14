function solution(a, b) {
    let answer = 0;
    
    let ab = Number(String(a) + String(b));
    let ba = Number(String(b) + String(a));
    
    return answer = ab >= ba ? ab : ba;
}