function solution(s) {
    var answer = '';

    if (s.length % 2 === 0) {
        answer = s[s.length / 2 - 1] + s[s.length/2];
    }else {
        answer = s[Math.floor(s.length/2)];
    }
    
    return answer;
}
console.log(solution("abcde"));
console.log(solution("qwer"));

//function solution(s) {
//    const answer = s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[Math.floor(s.length / 2)];
//     return answer;
// }
// console.log(solution("abcde"))
// console.log(solution("qwer"))
